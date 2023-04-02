import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAtAGlanceComponent } from './library-at-a-glance.component';

describe('LibraryAtAGlanceComponent', () => {
  let component: LibraryAtAGlanceComponent;
  let fixture: ComponentFixture<LibraryAtAGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryAtAGlanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAtAGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
