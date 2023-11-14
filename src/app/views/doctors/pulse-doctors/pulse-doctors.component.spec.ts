import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseDoctorsComponent } from './pulse-doctors.component';

describe('PulseDoctorsComponent', () => {
  let component: PulseDoctorsComponent;
  let fixture: ComponentFixture<PulseDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulseDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulseDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
