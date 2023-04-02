import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedialCoachingComponent } from './remedial-coaching.component';

describe('RemedialCoachingComponent', () => {
  let component: RemedialCoachingComponent;
  let fixture: ComponentFixture<RemedialCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemedialCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedialCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
