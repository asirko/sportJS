import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Program } from './program';

@Injectable()
export class ProgramService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Program[]> {
    return this.http.get<Program[]>(`/api/programs`);
  }

  findAllPlusEmpty(): Observable<Program[]> {
    return this.findAll().pipe(
      map(list => [...list, {name: 'Autre'}])
    );
  }

  updateProgram(index: number, program: Program): void {
    this.http.post(`/api/programs/${index}`, program)
      .subscribe();
  }

  addProgram(program: Program): void {
    this.http.post(`/api/programs`, program)
      .subscribe();
  }

  deleteProgram(index: number): void {
    this.http.delete(`/api/programs/${index}`)
      .subscribe();
  }

  getProgramByIndex(index: number): Observable<Program> {
    return this.http.get<Program>(`/api/programs/${index}`);
  }
}
