import {Component, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../services/patient.service";
import {PulsesService} from "../../../services/pulse.service";

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
  pulses: any[] = [];

  constructor(
    private patientService: PatientService,
    private pulsesService: PulsesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['idPatient'];

    this.patientService.getById(this.idPatient).subscribe((data: any): void => {
      this.currentPatient = data;

    });

    // Call the pulse service to get data
    this.pulsesService.getPulses().subscribe(
      (data: any) => {
        this.pulses = data;
        console.log(this.pulses);
      },
      (error) => {
        console.error("Error fetching pulse data", error);
      }
    );

  }
}
