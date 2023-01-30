import { TestBed } from '@angular/core/testing';

import { ShaerDataService } from './shaer-data.service';

describe('ShaerDataService', () => {
  let service: ShaerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShaerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
