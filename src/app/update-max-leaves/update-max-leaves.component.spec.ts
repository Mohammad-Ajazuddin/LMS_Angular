import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaxLeavesComponent } from './update-max-leaves.component';

describe('UpdateMaxLeavesComponent', () => {
  let component: UpdateMaxLeavesComponent;
  let fixture: ComponentFixture<UpdateMaxLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaxLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMaxLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
