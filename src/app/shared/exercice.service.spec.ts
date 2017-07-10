import { TestBed, inject } from '@angular/core/testing';

import { ExerciceService } from './exercice.service';

describe('ExerciceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciceService]
    });
  });

  it('should be created', inject([ExerciceService], (service: ExerciceService) => {
    expect(service).toBeTruthy();
  }));
});
