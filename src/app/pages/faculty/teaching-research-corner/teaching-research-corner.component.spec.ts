import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingResearchCornerComponent } from './teaching-research-corner.component';

describe('TeachingResearchCornerComponent', () => {
  let component: TeachingResearchCornerComponent;
  let fixture: ComponentFixture<TeachingResearchCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingResearchCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingResearchCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
