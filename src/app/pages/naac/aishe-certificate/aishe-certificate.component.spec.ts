import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisheCertificateComponent } from './aishe-certificate.component';

describe('AisheCertificateComponent', () => {
  let component: AisheCertificateComponent;
  let fixture: ComponentFixture<AisheCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AisheCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AisheCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
