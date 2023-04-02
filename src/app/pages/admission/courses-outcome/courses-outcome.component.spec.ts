import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOutcomeComponent } from './courses-outcome.component';

describe('CoursesOutcomeComponent', () => {
  let component: CoursesOutcomeComponent;
  let fixture: ComponentFixture<CoursesOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesOutcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
