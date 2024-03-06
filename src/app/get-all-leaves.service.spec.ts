import { TestBed } from '@angular/core/testing';

import { GetAllLeavesService } from './get-all-leaves.service';

describe('GetAllLeavesService', () => {
  let service: GetAllLeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllLeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
