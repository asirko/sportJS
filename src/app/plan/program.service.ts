import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Program } from './program';
import { HttpAuthService } from '../security/http-auth.service';

@Injectable()
export class ProgramService {
  currentPrograms: Program[];

  constructor(private http: HttpAuthService) { }

  findAll(): Observable<Program> {
    return this.http.get(`/api/programs`)
      .map(res => res.json())
      .do((list: Program[]) => this.currentPrograms = list);
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

  getProgramByIndex(index: number): Observable<any> {
    return this.http.get(`/api/programs/${index}`)
      .map(res => res.json());
  }
}
