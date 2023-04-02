import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCounselingComponent } from './career-counseling.component';

describe('CareerCounselingComponent', () => {
  let component: CareerCounselingComponent;
  let fixture: ComponentFixture<CareerCounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerCounselingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerCounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
