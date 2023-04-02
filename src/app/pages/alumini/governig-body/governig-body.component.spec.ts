import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernigBodyComponent } from './governig-body.component';

describe('GovernigBodyComponent', () => {
  let component: GovernigBodyComponent;
  let fixture: ComponentFixture<GovernigBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernigBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernigBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
