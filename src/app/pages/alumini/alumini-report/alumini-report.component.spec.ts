import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiReportComponent } from './alumini-report.component';

describe('AluminiReportComponent', () => {
  let component: AluminiReportComponent;
  let fixture: ComponentFixture<AluminiReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluminiReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
