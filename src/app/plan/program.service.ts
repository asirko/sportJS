import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Program } from './program';

@Injectable()
export class ProgramService {

  constructor(private http: Http) { }

  findAll(): Observable<Program> {
    return this.http.get(`/api/programs`)
      .map(res => res.json());
  }
}
