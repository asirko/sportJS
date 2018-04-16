import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpAuthService} from "../../core/security/http-auth.service";
import {Record} from "./record";

@Injectable()
export class RecordService {

  constructor(private http: HttpAuthService) { }

  findAll(): Observable<Record[]> {
    return this.http.get(`/api/exercices`)
      .map(res => res.json());
  }

}
