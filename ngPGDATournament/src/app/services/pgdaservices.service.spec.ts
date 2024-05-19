import { TestBed } from '@angular/core/testing';

import { PGDAServicesService } from './pgdaservices.service';

describe('PGDAServicesService', () => {
  let service: PGDAServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PGDAServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
