import {Component, Input, OnInit} from '@angular/core';
import {Exercice} from "../../../../shared/program/exercice";

@Component({
  selector: 'sp-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.scss']
})
export class ExercicesListComponent implements OnInit {

  @Input() exercices: Exercice[];

  constructor() { }

  ngOnInit() { }
}
