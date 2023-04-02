import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalFacilityComponent } from './physical-facility.component';

describe('PhysicalFacilityComponent', () => {
  let component: PhysicalFacilityComponent;
  let fixture: ComponentFixture<PhysicalFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
