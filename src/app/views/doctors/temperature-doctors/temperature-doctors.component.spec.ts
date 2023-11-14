import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDoctorsComponent } from './temperature-doctors.component';

describe('TemperatureDoctorsComponent', () => {
  let component: TemperatureDoctorsComponent;
  let fixture: ComponentFixture<TemperatureDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
