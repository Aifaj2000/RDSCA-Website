import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalEducationComponent } from './physical-education.component';

describe('PhysicalEducationComponent', () => {
  let component: PhysicalEducationComponent;
  let fixture: ComponentFixture<PhysicalEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
