import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganogramOfInstitutionComponent } from './organogram-of-institution.component';

describe('OrganogramOfInstitutionComponent', () => {
  let component: OrganogramOfInstitutionComponent;
  let fixture: ComponentFixture<OrganogramOfInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganogramOfInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganogramOfInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
