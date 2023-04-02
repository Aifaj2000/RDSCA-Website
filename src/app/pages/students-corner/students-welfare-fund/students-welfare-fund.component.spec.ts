import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWelfareFundComponent } from './students-welfare-fund.component';

describe('StudentsWelfareFundComponent', () => {
  let component: StudentsWelfareFundComponent;
  let fixture: ComponentFixture<StudentsWelfareFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsWelfareFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsWelfareFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
