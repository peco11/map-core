import {Directive, EventEmitter, Host, Input, Output} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

import {ToastController} from '@ionic/angular';

import GraphHopperResponse from 'graphhopper-js-api-client';
import GraphHopperRouting from 'graphhopper-js-api-client/src/GraphHopperRouting';

import {MapBrowserEvent} from 'ol';
import {Coordinate} from 'ol/coordinate';
import {stopPropagation} from 'ol/events/Event';
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import Geometry from 'ol/geom/Geometry';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import VectorLayer from 'ol/layer/Vector';
import {toLonLat} from 'ol/proj';
import VectorSource from 'ol/source/Vector';

import {filter, take} from 'rxjs/operators';
import {createIconFeatureFromHtml} from '../../src/utils/ol';
import {getLineStyle} from '../../src/utils/styles';
import {WmMapComponent} from '../components';
import {ITrackElevationChartHoverElements} from '../types/track-elevation-charts';
import {WmMapBaseDirective} from './base.directive';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import {endIconHtml, startIconHtml} from '../readonly';
export const RECORD_TRACK_ID: string = 'wm-current_record_track';

@Directive({
  selector: '[wmMapCustomTrackDrawTrack]',
})
export class wmMapCustomTrackDrawTrackDirective extends WmMapBaseDirective {
  /**
   * @description
   * A private instance variable that represents a vector layer for custom points of interest (POI) on the map.
   *
   * @type VectorLayer<VectorSource>
   */
  private _customPoiLayer: VectorLayer<VectorSource>;
  /**
   * @description
   * A private class property that initializes a new instance of VectorSource with an empty array of features.
   * This is likely used for adding custom point-of-interest (POI) features to the map, which can be added using the
   * addFeature method of the VectorSource instance.
   */
  private _customPoiSource: VectorSource = new VectorSource({
    features: [],
  });
  /**
   * @description
   * This is a private variable with an unspecified type.
   * It is used within the scope of the class and is likely used to store a custom track object for the map component.
   */
  private _customTrack: any;
  /**
   * @description
   * A vector layer representing a custom track.
   */
  private _customTrackLayer: VectorLayer<VectorSource>;
  /**
   * @description
   * Private BehaviorSubject that stores the current enabled status of the layer.
   * Used to control whether the layer is shown on the map or not.
   */
  private _enabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  /**
   * @description
   * A private property representing an instance of GraphHopperRouting for routing calculations.
   * @remarks
   * This property is used to perform routing calculations using GraphHopper API.
   * @param _graphHopperRoutingObj - An instance of GraphHopperRouting class.
   */
  private _graphHopperRoutingObj: GraphHopperRouting;
  /**
   * An array of `Coordinate` objects that define a path or shape on the map.
   */
  private _points: Coordinate[] = [];

  @Input('wmMapCustomTrackDrawTrack') set enabled(val: boolean) {
    this._enabled$.next(val);
  }

  @Input() set reloadCustomTracks(val) {
    if (val != null) this._clear();
  }

  @Input() customTracks: any[];
  @Input() trackElevationChartElements: ITrackElevationChartHoverElements;
  @Input() wmMapCustomTrackDrawTrackHost: string;
  @Output() currentCustomTrack: EventEmitter<any> = new EventEmitter<any>();

  reset$ = new Subject();

  /**
   * @description
   * Creates a new instance of WmMapCustomTrackService, which provides the functionality for drawing custom tracks on the map.
   * @constructor
   * @param {ToastController} _toastCtrl - An instance of the ToastController, used for displaying toast messages.
   * @param {WmMapComponent} mapCmp - An instance of the WmMapComponent, the parent component of this service.
   */
  constructor(private _toastCtrl: ToastController, @Host() mapCmp: WmMapComponent) {
    super(mapCmp);
    this.mapCmp.isInit$
      .pipe(
        filter(f => f === true),
        take(1),
      )
      .subscribe(() => {
        this.mapCmp.map.once('rendercomplete', () => {
          this._init();
        });
      });
  }

  _init(): void {
    this.reset$.next(void 0);

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
        elevation: true,
        instructions: false,
      });
      if (this.wmMapCustomTrackDrawTrackHost) {
        this._graphHopperRoutingObj.host = this.wmMapCustomTrackDrawTrackHost;
      }
      this._graphHopperRoutingObj.defaults.profile = 'hike';
    }
    this.mapCmp.map.on('click', (evt: MapBrowserEvent<UIEvent>) => {
      if (this._enabled$.value) {
        stopPropagation(evt);
        const oldCoordinates = this.mapCmp.map.getFeaturesAtPixel(evt.pixel);
        if (oldCoordinates != null && oldCoordinates.length > 0) {
          const oldCoordinate: Feature<Geometry> = oldCoordinates[0] as Feature<Geometry>;
          this._customPoiSource.removeFeature(oldCoordinate);
          const coords = toLonLat((oldCoordinate.getGeometry() as SimpleGeometry).getCoordinates());
          this._points = this._points.filter(c => c[0] != coords[0] && c[1] != coords[1]);
        } else {
          const lonLat = toLonLat(evt.coordinate);
          const startFeature = createIconFeatureFromHtml(startIconHtml, lonLat);
          this._customPoiSource.addFeature(startFeature);
          this._points.push(lonLat);
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
                this._message(err.message);
                this._points.pop();
                this._redrawPoints();
              }
            },
          );
        } else {
          this._customTrackLayer.getSource().clear();
        }
      }
    });

    this._enabled$.subscribe(v => {
      if (v === false) {
        this._clear();
      }
    });
  }

  /**
   * @description
   * This code is a private method named "_clear()" that is used to clear the custom track layer and custom poi layer,
   * as well as reset the "_points" array. The "_customTrackLayer" and "_customPoiLayer" are assumed to be variables of type Layer,
   * while the "_points" array is assumed to contain elements of type Point.
   * The method does not return any value, indicated by the "void" keyword.
   * @private
   * @memberof wmMapCustomTrackDrawTrackDirective
   */
  private _clear(): void {
    this._customTrackLayer.getSource().clear();
    this._customPoiLayer.getSource().clear();
    this._points = [];
  }

  /**
   * @description
   * This code initializes a custom track layer and adds it to the map.
   * It creates a VectorLayer with a VectorSource set to the GeoJSON format,
   * and sets the style of the layer to a line style of color #CA1551. The layer is set to update while animating and interacting,
   * and given a zIndex of 1000. It also creates a custom Poi Layer with the same zIndex of 1100 and adds it to the map,
   * as well as getting the renderer.
   * @private
   * @memberof wmMapCustomTrackDrawTrackDirective
   */
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
      if (this.mapCmp.map != null) {
        this.mapCmp.map.addLayer(this._customTrackLayer);
        this._customPoiLayer = new VectorLayer({
          zIndex: 1100,
          source: this._customPoiSource,
        });
        this.mapCmp.map.addLayer(this._customPoiLayer);
        this.mapCmp.map.getRenderer();
      }
    }
  }

  /**
   * @description
   * This is a private async function called "_message" which takes a string as an argument.
   * It creates a toast message with the given string and sets the duration to 1000 milliseconds.
   * The function returns a promise of type void.
   * @private
   * @param {string} msg
   * @returns {*}  {Promise<void>}
   * @memberof wmMapCustomTrackDrawTrackDirective
   */
  private async _message(msg: string): Promise<void> {
    const toast = await this._toastCtrl.create({
      message: msg,
      duration: 1000,
    });
    await toast.present();
  }

  /**
   * @description
   * Redraws the points on the map for the custom track.
   * @private
   * @memberof wmMapCustomTrackDrawTrackDirective
   */
  private _redrawPoints(): void {
    let id: number = 0;
    this._customPoiSource.clear();
    const startFeature = createIconFeatureFromHtml(startIconHtml, this._points[0]);
    const endFeature = createIconFeatureFromHtml(
      endIconHtml,
      this._points[this._points.length - 1],
    );
    this._customPoiSource.addFeature(startFeature);
    this._customPoiSource.addFeature(endFeature);

    this._customPoiLayer.changed();
    this.mapCmp.map.render();
  }

  /**
   * @description
   * This function updates a track on a map.
   * It creates a new GeoJSON feature with the feature projection set to 'EPSG:3857'.
   * It then sets the ID of this feature to RECORD_TRACK_ID. If there is already a feature with this ID,
   * it removes it from the source. The new feature is then added to the source and changed.
   * Finally, the map is rendered.
   * @private
   * @memberof wmMapCustomTrackDrawTrackDirective
   */
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
    this.mapCmp.map.render();
  }
}
