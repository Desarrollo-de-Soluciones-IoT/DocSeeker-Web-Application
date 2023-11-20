import {Component, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../services/patient.service";

@Component({
  selector: 'app-pulse-doctors',
  templateUrl: './pulse-doctors.component.html',
  styleUrls: ['./pulse-doctors.component.css']
})
export class PulseDoctorsComponent implements OnInit{
  idPatient =""
  medicalInformation: any;
  currentPatient: any;
  patient: any;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['idPatient'];

    this.patientService.getById(this.idPatient).subscribe((data: any): void => {
      this.currentPatient = data;

    });



  }
}
