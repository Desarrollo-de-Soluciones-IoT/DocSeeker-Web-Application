import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PulsesService} from "../../../services/pulse.service";

@Component({
  selector: 'app-pulse-patient',
  templateUrl: './pulse-patient.component.html',
  styleUrls: ['./pulse-patient.component.css']
})
export class PulsePatientComponent implements OnInit {
  idPatient = "";
  currentPatient: any;
  pulses: any[] = [];

  constructor(
    private pulsesService: PulsesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['id'];
    this.currentPatient = localStorage.getItem('currentPatient');
    
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }

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