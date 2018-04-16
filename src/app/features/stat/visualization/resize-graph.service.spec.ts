import { TestBed, inject } from '@angular/core/testing';

import { ResizeGraphService } from './resize-graph.service';

describe('ResizeGraphService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResizeGraphService]
    });
  });

  it('should be created', inject([ResizeGraphService], (service: ResizeGraphService) => {
    expect(service).toBeTruthy();
  }));
});
