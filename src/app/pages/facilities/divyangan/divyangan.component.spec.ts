import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivyanganComponent } from './divyangan.component';

describe('DivyanganComponent', () => {
  let component: DivyanganComponent;
  let fixture: ComponentFixture<DivyanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivyanganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivyanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
