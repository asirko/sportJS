import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ExerciceService {

  constructor(private http: Http) { }

  getProgramByIndex(index: number): Observable<any> {
    return this.http.get(`/api/programs/${index}`)
      .map(res => res.json());
  }

}
