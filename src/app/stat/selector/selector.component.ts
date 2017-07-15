import { Component, OnInit } from '@angular/core';
import {ExerciceCategory} from "../../shared/exercice/exercice";
import {ExerciceService} from "../../shared/exercice/exercice.service";
import {Observable} from "rxjs/Observable";
import {Record} from "../../shared/exercice/record";
import {RecordStoreService} from "../record-store.service";

@Component({
  selector: 'sp-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  selectedCategory: ExerciceCategory;
  selectedRecord: Record;
  records$: Observable<Record[]>;

  constructor(private exerciceService: ExerciceService,
              private recordStoreService: RecordStoreService) { }

  ngOnInit() {
    this.records$ = this.exerciceService.findAll();
  }

  setSelectedCategory(cat: ExerciceCategory): void {
    this.selectedCategory = cat;
  }

  selectRecord(record: Record): void {
    this.selectedRecord = record;
    this.recordStoreService.setNewSelectedRecord(record);
  }

}
