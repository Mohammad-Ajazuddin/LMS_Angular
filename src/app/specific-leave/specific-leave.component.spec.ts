import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificLeaveComponent } from './specific-leave.component';

describe('SpecificLeaveComponent', () => {
  let component: SpecificLeaveComponent;
  let fixture: ComponentFixture<SpecificLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
