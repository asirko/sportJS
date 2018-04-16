import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Program } from './program';
import { HttpAuthService } from '../../core/security/http-auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProgramService {

  constructor(private http: HttpAuthService) { }

  findAll(): Observable<Program[]> {
    return this.http.get(`/api/programs`).pipe(
      map(res => res.json())
    );
  }

  findAllPlusEmpty(): Observable<Program[]> {
    return this.findAll().pipe(
      map(list => [...list, {name: 'Autre'}])
    );
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
    return this.http.get(`/api/programs/${index}`).pipe(
      map(res => res.json())
    );
  }
}
