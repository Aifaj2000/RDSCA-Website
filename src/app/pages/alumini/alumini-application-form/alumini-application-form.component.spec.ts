import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiApplicationFormComponent } from './alumini-application-form.component';

describe('AluminiApplicationFormComponent', () => {
  let component: AluminiApplicationFormComponent;
  let fixture: ComponentFixture<AluminiApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluminiApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
