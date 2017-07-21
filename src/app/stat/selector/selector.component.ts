import { Component, OnInit } from '@angular/core';
import {ExerciceCategory} from "../../shared/program/exercice";
import {RecordService} from "../../shared/record/record.service";
import {Observable} from "rxjs/Observable";
import {Record} from "../../shared/record/record";
import {RecordStoreService} from "../record-store.service";

import 'rxjs/add/operator/take';

@Component({
  selector: 'sp-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  selectedCategory: ExerciceCategory;
  selectedRecordTmp: number;
  records$: Observable<Record[]>;

  constructor(private exerciceService: RecordService,
              private recordStoreService: RecordStoreService) { }

  ngOnInit() {
    this.records$ = this.exerciceService.findAll();
    this.recordStoreService
      .getSelectedRecord$()
      .filter(r => r !== null)
      .take(1)
      .subscribe(r => this.selectedRecordTmp = r.date);
  }

  setSelectedCategory(cat: ExerciceCategory): void {
    this.selectedCategory = cat;
  }

  selectRecord(record: Record): void {
    this.selectedRecordTmp = record.date;
    this.recordStoreService.setNewSelectedRecord(record);
  }

}
