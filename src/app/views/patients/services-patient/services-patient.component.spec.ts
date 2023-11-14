import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPatientComponent } from './services-patient.component';

describe('ServicesPatientComponent', () => {
  let component: ServicesPatientComponent;
  let fixture: ComponentFixture<ServicesPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
