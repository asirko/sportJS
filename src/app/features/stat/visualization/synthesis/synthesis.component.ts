import { Component, OnInit } from '@angular/core';
import { RecordStoreService } from '../../record-store.service';
import { Record } from '../../../../shared/record/record';
import { from, Observable } from 'rxjs';
import { filter, last, map, max, mergeMap, min, reduce } from 'rxjs/operators';

@Component({
  selector: 'sp-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.scss']
})
export class SynthesisComponent implements OnInit {

  record$: Observable<Record>;

  constructor(private recordStoreService: RecordStoreService) { }

  ngOnInit() {
    this.record$ = this.recordStoreService.getSelectedRecord$();
  }

  getType$(): Observable<string> {
    return this.record$.pipe(
      filter(r => !!r),
      map(r => r.type)
    );
  }

  getDuration$(): Observable<string> {
    return this.record$.pipe(
      filter(record => !!record),
      mergeMap(record => from(record.heartBeats).pipe(
        map(r => r.x + 1),
        last()
      )),
      map(x => `${Math.floor(x / 60)}''${Math.floor(x % 60)}`)
    );
  }

  getMax$(): Observable<number> {
    return this.record$.pipe(
      filter(record => !!record),
      mergeMap(record => from(record.heartBeats).pipe(
        map(r => r.y),
        max()
      ))
    );
  }

  getMin$(): Observable<number> {
    return this.record$.pipe(
      filter(record => !!record),
      mergeMap(record => from(record.heartBeats).pipe(
        map(r => r.y),
        min()
      ))
    );
  }

  getAverage$(): Observable<number> {
    return this.record$.pipe(
      filter(record => !!record),
      mergeMap(record => from(record.heartBeats).pipe(
        map(r => r.y),
        reduce(average, {sum: 0, nb: 0}),
        map(accu => accu.sum / accu.nb)
      ))
    );

    function average(accu: {sum, nb}, current): {sum, nb} {
      return {sum: accu.sum + current, nb: accu.nb + 1};
    }
  }
}
