import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sp-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.scss']
})
export class SynthesisComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  getType$(): Observable<string> {
    return null;
  }

  getDuration$(): Observable<string> {
    return null;
  }

  getMax$(): Observable<number> {
    return null;
  }

  getMin$(): Observable<number> {
    return null;
  }

  getAverage$(): Observable<number> {
    return null;
  }
}
