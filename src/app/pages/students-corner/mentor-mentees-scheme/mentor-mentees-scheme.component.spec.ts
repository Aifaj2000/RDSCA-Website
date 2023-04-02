import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorMenteesSchemeComponent } from './mentor-mentees-scheme.component';

describe('MentorMenteesSchemeComponent', () => {
  let component: MentorMenteesSchemeComponent;
  let fixture: ComponentFixture<MentorMenteesSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorMenteesSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorMenteesSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
