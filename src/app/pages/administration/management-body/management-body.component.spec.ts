import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBodyComponent } from './management-body.component';

describe('ManagementBodyComponent', () => {
  let component: ManagementBodyComponent;
  let fixture: ComponentFixture<ManagementBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
