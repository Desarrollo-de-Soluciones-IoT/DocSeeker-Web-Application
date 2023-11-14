import {Component, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-temperature-patient',
  templateUrl: './temperature-patient.component.html',
  styleUrls: ['./temperature-patient.component.css']
})
export class TemperaturePatientComponent implements OnInit{
  idPatient =""
  medicalInformation: any;
  currentPatient: any;
  patient: any;

  constructor(
    private sourcesService: SourcesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['id'];
    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }


  }
}
