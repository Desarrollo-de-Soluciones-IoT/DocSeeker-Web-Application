import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsListServicesComponent } from './patients-list-services.component';

describe('PatientsListServicesComponent', () => {
  let component: PatientsListServicesComponent;
  let fixture: ComponentFixture<PatientsListServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsListServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsListServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
