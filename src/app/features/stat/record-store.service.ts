import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Record } from '../../shared/record/record';

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
