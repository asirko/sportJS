import { TestBed, inject } from '@angular/core/testing';

import { RecordStoreService } from './record-store.service';

describe('RecordStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordStoreService]
    });
  });

  it('should be created', inject([RecordStoreService], (service: RecordStoreService) => {
    expect(service).toBeTruthy();
  }));
});
