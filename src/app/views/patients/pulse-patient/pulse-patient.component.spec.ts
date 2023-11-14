import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsePatientComponent } from './pulse-patient.component';

describe('PulsePatientComponent', () => {
  let component: PulsePatientComponent;
  let fixture: ComponentFixture<PulsePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulsePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
