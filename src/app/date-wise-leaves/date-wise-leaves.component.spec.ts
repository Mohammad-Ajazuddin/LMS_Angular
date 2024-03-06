import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseLeavesComponent } from './date-wise-leaves.component';

describe('DateWiseLeavesComponent', () => {
  let component: DateWiseLeavesComponent;
  let fixture: ComponentFixture<DateWiseLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateWiseLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
