import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWiseLeavesComponent } from './employee-wise-leaves.component';

describe('EmployeeWiseLeavesComponent', () => {
  let component: EmployeeWiseLeavesComponent;
  let fixture: ComponentFixture<EmployeeWiseLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWiseLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWiseLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
