import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ICONTROLSBUTTON, ICONTROLSTITLE} from '../../../types/model';
import {BehaviorSubject} from 'rxjs';
const NOICON = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="211px" height="211px" viewBox="0 0 211 211" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
    <title>missing-cover</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="missing-cover">
            <rect id="Rectangle" fill="#E8E8E8" x="0" y="0" width="211" height="211"></rect>
            <g id="Group" opacity="0.55" transform="translate(77.408284, 82.402367)" fill="#848484" fill-rule="nonzero">
                <path d="M51.3142012,0.124852071 L4.86923077,0.124852071 C2.24733728,0.124852071 0.249704142,2.24733728 0.249704142,4.86923077 L0.249704142,42.5745562 C0.249704142,45.1964497 2.37218935,47.3189349 4.86923077,47.3189349 L51.4390533,47.3189349 C54.0609467,47.3189349 56.0585799,45.1964497 56.0585799,42.5745562 L56.0585799,4.86923077 C56.0585799,2.24733728 53.9360947,0.124852071 51.3142012,0.124852071 Z M51.3142012,4.86923077 L51.3142012,31.3378698 L43.8230769,22.2236686 C43.0739645,21.2248521 41.5757396,21.1 40.5769231,21.8491124 L32.9609467,27.7171598 L20.4757396,14.9822485 C19.6017751,14.108284 18.2284024,14.108284 17.2295858,14.8573964 L4.86923077,25.5946746 L4.86923077,4.7443787 L51.3142012,4.86923077 Z M4.86923077,42.5745562 L4.86923077,31.8372781 L18.7278107,19.8514793 L31.0881657,32.4615385 C31.9621302,33.335503 33.2106509,33.335503 34.2094675,32.7112426 L41.7005917,26.9680473 L51.3142012,38.704142 L51.3142012,42.5745562 L51.3142012,42.5745562 L4.86923077,42.5745562 Z" id="Shape"></path>
                <path d="M42.0751479,17.7289941 C44.6970414,17.7289941 46.6946746,15.6065089 46.6946746,12.9846154 C46.6946746,10.3627219 44.5721893,8.24023669 42.0751479,8.24023669 C39.4532544,8.24023669 37.4556213,10.3627219 37.4556213,12.9846154 C37.3307692,15.6065089 39.4532544,17.7289941 42.0751479,17.7289941 Z" id="Path"></path>
            </g>
        </g>
    </g>
</svg>`;
@Component({
  selector: 'wm-map-button-control',
  template: `
    <ng-container *ngIf="control.type==='title'">
        <ion-label class="wm-map-button-control-title">{{translationCallback(control.label)}}</ion-label>    
    </ng-container>
    <div  class="wm-map-button-control-button" *ngIf="control.type === 'button'" (click)="click(control.id)">
        <div  class="wm-map-button-control-icon" [innerHtml]="sanitaze(control.icon)" [ngClass]="[wmMapButtonControlSelected$.value?'selected':'']"></div>
        <span class="wm-map-button-control-label">{{translationCallback(control.label)}}</span>
    </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['button.controls.map.scss'],
})
export class WmMapButtonControls {
  @Input('wmMapButtonControlSelect') set selected(val) {
    this.wmMapButtonControlSelected$.next(val);
  }

  @Input('wmMapButtonControl') control: ICONTROLSTITLE | ICONTROLSBUTTON;
  @Input('wmMapTranslationCallback') translationCallback: (any) => string = value => value;
  @Output('wmMapButtonContolClicked')
  clickedEvt: EventEmitter<number> = new EventEmitter<number>();

  wmMapButtonControlSelected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public sanitizer: DomSanitizer) {}

  click(id): void {
    this.clickedEvt.emit(id);
  }

  sanitaze(val): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(val);
  }
}
