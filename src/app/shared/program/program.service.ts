import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Program } from './program';

@Injectable()
export class ProgramService {

  constructor() { }

  /**
   * voir la page /plan, il doit y avoir 3 éléments
   * @returns {null}
   */
  findAll(): Observable<Program[]> {
    return null;
  }

  /**
   * voir la page /run, le switch doit avoir 3 élément + autre
   * @returns {null}
   */
  findAllPlusEmpty(): Observable<Program[]> {
    return null;
  }

  /**
   * accéder au détail d'un programme /plan/0
   * @param index
   * @returns {null}
   */
  getProgramByIndex(index: number): Observable<any> {
    return null;
  }

  /**
   * faites une mise à jour d'un programme (description ?) et faites un rafraïchissment de la page
   * @param index
   * @param program
   */
  updateProgram(index: number, program: Program): void {
  }

  /**
   * créez un programme
   * @param program
   */
  addProgram(program: Program): void {
  }

  /**
   * supprimer un programme
   * @param index
   */
  deleteProgram(index: number): void {
  }
}
