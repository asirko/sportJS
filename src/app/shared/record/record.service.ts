import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Record } from './record';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecordService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Record[]> {
    return this.http.get<Record[]>(`/api/exercices`);
  }

}
