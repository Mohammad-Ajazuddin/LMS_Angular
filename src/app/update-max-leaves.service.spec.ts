import { TestBed } from '@angular/core/testing';

import { UpdateMaxLeavesService } from './update-max-leaves.service';

describe('UpdateMaxLeavesService', () => {
  let service: UpdateMaxLeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMaxLeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
