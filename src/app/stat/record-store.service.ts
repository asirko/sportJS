import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Record} from "../shared/record/record";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecordStoreService {

  selectedRecord = new BehaviorSubject<Record>(null);

  constructor() { }

  getSelectedRecord$(): Observable<Record> {
    return this.selectedRecord.asObservable();
  }

  setNewSelectedRecord(record: Record): void {
    this.selectedRecord.next(record);
  }

}
