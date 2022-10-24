import {BehaviorSubject, Subject} from 'rxjs';
import {Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {coordsFromLonLat, getLineStyle} from './utils';

import CircleStyle from 'ol/style/Circle';
import {Coordinate} from 'ol/coordinate';
import Feature from 'ol/Feature';
import Fill from 'ol/style/Fill';
import GeoJSON from 'ol/format/GeoJSON';
import Geometry from 'ol/geom/Geometry';
import GraphHopperResponse from 'graphhopper-js-api-client';
import GraphHopperRouting from 'graphhopper-js-api-client/src/GraphHopperRouting';
import {ITrackElevationChartHoverElements} from './types/track-elevation-charts';
import {MapBrowserEvent} from 'ol';
import Point from 'ol/geom/Point';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {WmMapBaseDirective} from './base.directive';
import {stopPropagation} from 'ol/events/Event';
import {toLonLat} from 'ol/proj';

export const GRAPH_HOPPER_API_KEY: string = '92e49c7c-1c0a-4aad-8097-e9bfec06360d';
export const RECORD_TRACK_ID: string = 'wm-current_record_track';

@Directive({
  selector: '[wmMapDrawTrack]',
})
export class WmMapDrawTrackDirective extends WmMapBaseDirective implements OnChanges {
  private _customPoiLayer: VectorLayer;
  private _customPoiSource: VectorSource = new VectorSource({
    features: [],
  });
  private _customTrack: any;
  private _customTrackLayer: VectorLayer;
  private _enabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _graphHopperRoutingObj: GraphHopperRouting;
  private _points: Coordinate[] = [];

  @Input() conf: IMAP;
  @Input() customTracks: any[];
  @Input() trackElevationChartElements: ITrackElevationChartHoverElements;
  @Output() currentCustomTrack: EventEmitter<any> = new EventEmitter<any>();

  reset$ = new Subject();

  constructor() {
    super();
  }

  @Input('wmMapDrawTrack') set enabled(val: boolean) {
    this._enabled$.next(val);
  }

  @Input() set reloadCustomTracks(val) {
    if (val != null) {
      this._clear();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.reset$.next(void 0);
    if (changes.map != null && changes.previousValue == null && changes.map.currentValue != null) {
      this._initializeCustomTrackLayer();
      this._customTrack = {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
        properties: {
          id: 'wm-current_record_track',
          name: '',
          color: 'rgba(226, 249, 0, 0.6)',
        },
      };
      if (!this._graphHopperRoutingObj) {
        this._graphHopperRoutingObj = new GraphHopperRouting({
          vehicle: 'foot',
          key: GRAPH_HOPPER_API_KEY,
          elevation: true,
          instructions: false,
        });
        this._graphHopperRoutingObj.defaults.profile = 'hike';
      }
      this.map.on('singleclick', (evt: MapBrowserEvent<UIEvent>) => {
        if (this._enabled$.value) {
          const oldCoordinates = this.map.getFeaturesAtPixel(evt.pixel);
          if (oldCoordinates != null && oldCoordinates.length > 0) {
            const oldCoordinate: Feature<Geometry> = oldCoordinates[0] as Feature<Geometry>;
            this._customPoiSource.removeFeature(oldCoordinate);
            const coords = toLonLat(
              (oldCoordinate.getGeometry() as SimpleGeometry).getCoordinates(),
            );
            this._points = this._points.filter(c => c[0] != coords[0] && c[1] != coords[1]);
          } else {
            const circleFeature = new Feature({
              geometry: new Point(evt.coordinate),
            });
            circleFeature.setStyle(
              new Style({
                image: new CircleStyle({
                  radius: 15,
                  stroke: new Stroke({
                    color: '#fff',
                  }),
                  fill: new Fill({
                    color: '#3399CC',
                  }),
                }),
              }),
            );
            this._customPoiSource.addFeature(circleFeature);
            const lonLat = toLonLat(evt.coordinate);
            this._points.push([lonLat[0], lonLat[1]]);
          }
          this._customPoiSource.changed();
          this._customPoiLayer.changed();
          if (this._points.length > 1) {
            this._graphHopperRoutingObj.doRequest({points: this._points}).then(
              (res: GraphHopperResponse) => {
                this._customTrack.geometry = res.paths[0].points;
                this._customTrack.properties.ascent = res.paths[0].ascend
                  ? Math.round(res.paths[0].ascend)
                  : this._customTrack.properties.ascent;
                this._customTrack.properties.descent = res.paths[0].descend
                  ? Math.round(res.paths[0].descend)
                  : this._customTrack.properties.descent;
                this._customTrack.properties.distance = res.paths[0].distance
                  ? res.paths[0].distance / 1000
                  : this._customTrack.properties.distance;
                let time: number =
                  res.paths[0].distance && res.paths[0].ascend
                    ? (res.paths[0].distance + res.paths[0].ascend * 10) / 3000
                    : res.paths[0].time
                    ? res.paths[0].time / (1000 * 60 * 60)
                    : undefined;

                if (time !== undefined)
                  this._customTrack.properties['duration:forward'] =
                    Math.floor(time) + ':' + ('0' + Math.round((time % 1) * 60)).slice(-2) + ' h';

                this._updateTrack();
                this._redrawPoints();
                this.currentCustomTrack.emit(this._customTrack);
              },
              (err: Error) => {
                console.warn(err);
                if (err.message.indexOf('Specify at least 2 points') !== -1) {
                  this._customTrack.geometry.coordinates = [];
                  this._customTrack.properties.ascent = undefined;
                  this._customTrack.properties.descent = undefined;
                  this._customTrack.properties.distance = undefined;
                  this._customTrack.properties['duration:forward'] = undefined;
                  this._updateTrack();
                } else if (err.message.indexOf('Cannot find point') !== -1) {
                  let pointIndex: number = 0,
                    split: Array<string> = err.message.split(' ');

                  if (
                    split.length > 3 &&
                    split[3] !== '' &&
                    !Number.isNaN(parseInt(split[3])) &&
                    parseInt(split[3]) >= 0
                  ) {
                    pointIndex = parseInt(split[3]);
                    this._points.splice(pointIndex, 1);
                    this._redrawPoints();
                  }
                } else if (err.message.indexOf('Too many points for Routing API') !== -1) {
                  this._graphHopperRoutingObj.points.pop();
                  this._redrawPoints();
                } else {
                }
              },
            );
          } else {
            this._customTrackLayer.getSource().clear();
          }
          stopPropagation(evt);
        }
      });

      this._enabled$.subscribe(v => {
        if (v === false) {
          this._clear();
        }
      });
    }
  }

  private _clear(): void {
    this._customTrackLayer.getSource().clear();
    this._customPoiLayer.getSource().clear();
    this._points = [];
  }

  private _initializeCustomTrackLayer(): void {
    if (!this._customTrackLayer) {
      this._customTrackLayer = new VectorLayer({
        source: new VectorSource({
          format: new GeoJSON(),
        }),
        style: () => getLineStyle('#CA1551'),
        updateWhileAnimating: true,
        updateWhileInteracting: true,
        zIndex: 1000,
      });
      if (this.map != null) {
        this.map.addLayer(this._customTrackLayer);
        this._customPoiLayer = new VectorLayer({
          zIndex: 1100,
          source: this._customPoiSource,
        });
        this.map.addLayer(this._customPoiLayer);
        this.map.getRenderer();
      }
    }
  }

  private _redrawPoints(): void {
    let id: number = 0;

    this._customTrackLayer.getSource().forEachFeature((feature: Feature) => {
      if (feature.getGeometry().getType() === 'Point')
        this._customTrackLayer.getSource().removeFeature(feature);
    });

    for (let point of this._points) {
      let newPoi: Feature = new Feature(new Point(coordsFromLonLat(point)));
      newPoi.setId(id + '');
      this._customTrackLayer.getSource().addFeature(newPoi);
      newPoi.changed();
      id++;
    }

    this._customTrackLayer.changed();
    this.map.render();
  }

  private _updateTrack(): void {
    let feature: Feature = new GeoJSON({
      featureProjection: 'EPSG:3857',
    }).readFeatures(this._customTrack)[0];

    feature.setId(RECORD_TRACK_ID);
    if (this._customTrackLayer.getSource().getFeatureById(RECORD_TRACK_ID))
      this._customTrackLayer
        .getSource()
        .removeFeature(this._customTrackLayer.getSource().getFeatureById(RECORD_TRACK_ID));
    this._customTrackLayer.getSource().addFeature(feature);
    this._customTrackLayer.getSource().getFeatureById(RECORD_TRACK_ID).changed();
    this._customTrackLayer.changed();
    this.map.render();
  }
}
