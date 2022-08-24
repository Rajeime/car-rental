import { TestBed } from '@angular/core/testing';

import { RentalInfoService } from './rental-info.service';

describe('RentalInfoService', () => {
  let service: RentalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
