import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ResizeGraphService {

  width$ = new BehaviorSubject<number>(0);

  constructor() { }

  setWidth(width: number): void {
    this.width$.next(width);
  }

  getWidth$(): Observable<number> {
    return this.width$.asObservable();
  }

}
