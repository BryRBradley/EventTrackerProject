import { TestBed } from '@angular/core/testing';
import { PgdaService } from './pgda.service';

describe('PGDAServicesService', () => {
  let service: PgdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
