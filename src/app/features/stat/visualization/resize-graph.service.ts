import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
