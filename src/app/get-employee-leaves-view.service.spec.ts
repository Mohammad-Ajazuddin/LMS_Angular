import { TestBed } from '@angular/core/testing';

import { GetEmployeeLeavesViewService } from './get-employee-leaves-view.service';

describe('GetEmployeeLeavesViewService', () => {
  let service: GetEmployeeLeavesViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmployeeLeavesViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
