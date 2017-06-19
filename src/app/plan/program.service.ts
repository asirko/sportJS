import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Program } from './program';

@Injectable()
export class ProgramService {
  currentPrograms: Program[];

  constructor(private http: Http) { }

  findAll(): Observable<Program> {
    return this.http.get(`/api/programs`)
      .map(res => res.json())
      .do(list => this.currentPrograms = list);
  }

  updateProgram(index: number, program: Program): void {
    this.http.post(`/api/programs/${index}`, program)
      .subscribe(() => {});
  }

  addProgram(program: Program): void {
    this.http.post(`/api/programs`, program)
      .subscribe(() => {});
  }

  deleteProgram(index: number): void {
    this.http.delete(`/api/programs/${index}`)
      .subscribe(() => {});
  }

  getProgramByIndex(index: number): Observable<Program> {
    return this.http.get(`/api/programs/${index}`)
      .map(res => res.json());
  }
}
