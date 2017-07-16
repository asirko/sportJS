import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecordStoreService} from "../../record-store.service";
import {Observable} from "rxjs/Observable";
import {Record} from "../../../shared/record/record";
import 'rxjs/add/operator/reduce'
import 'rxjs/add/operator/max'
import 'rxjs/add/operator/min'
import 'rxjs/add/operator/last'
import 'rxjs/add/observable/from'
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'sp-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.scss']
})
export class SynthesisComponent implements OnInit, OnDestroy {

  record$: Observable<Record>;

  constructor(private recordStoreService: RecordStoreService) { }

  ngOnInit() {
    this.record$ = this.recordStoreService.getSelectedRecord$();
  }

  ngOnDestroy(): void { }

  getType$(): Observable<string> {
    return this.record$
      .filter(r => !!r)
      .map(r => r.type);
  }

  getDuration$(): Observable<string> {
    return this.record$
      .filter(r => !!r)
      .mergeMap(r => Observable.from(r.heartBeats)
        .map(r => r.x + 1)
        .last())
      .map(x => `${Math.floor(x/60)}''${Math.floor(x%60)}`);
  }

  getMax$(): Observable<number> {
    return this.record$
      .filter(r => !!r)
      .mergeMap(r => Observable.from(r.heartBeats)
        .map(r => r.y)
        .max());
  }

  getMin$(): Observable<number> {
    return this.record$
      .filter(r => !!r)
      .mergeMap(r => Observable.from(r.heartBeats)
        .map(r => r.y)
        .min());
  }

  getAverage$(): Observable<number> {
    return this.record$
      .filter(r => !!r)
      .mergeMap(r => Observable.from(r.heartBeats)
        .map(r => r.y)
        .reduce(average, {sum: 0, nb: 0})
        .map(accu => accu.sum / accu.nb));

    function average(accu: {sum, nb}, current): {sum, nb} {
      return {sum: accu.sum + current, nb: accu.nb + 1};
    }
  }
}
