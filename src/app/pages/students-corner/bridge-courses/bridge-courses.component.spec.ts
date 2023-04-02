import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeCoursesComponent } from './bridge-courses.component';

describe('BridgeCoursesComponent', () => {
  let component: BridgeCoursesComponent;
  let fixture: ComponentFixture<BridgeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
