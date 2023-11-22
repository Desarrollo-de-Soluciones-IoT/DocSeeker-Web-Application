import { Component, OnInit } from '@angular/core';
import { TemperatureService } from "../../../services/temperature.service"; // Añade el servicio de temperatura
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-temperature-patient',
  templateUrl: './temperature-patient.component.html',
  styleUrls: ['./temperature-patient.component.css']
})
export class TemperaturePatientComponent implements OnInit {
  idPatient = "";
  medicalInformation: any;
  currentPatient: any;
  patient: any;
  temperatures: any[] = []; // Variable para almacenar los datos de temperatura

  constructor(
    private temperatureService: TemperatureService, // Inyecta el servicio de temperatura
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['id'];
    this.currentPatient = localStorage.getItem('currentPatient');
    
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }

    // Llama al servicio de temperatura para obtener los datos
    this.temperatureService.getTemperatures().subscribe(
      (data: any) => {
        // Asigna los datos de temperatura a la variable
        this.temperatures = data;
        console.log(this.temperatures);
      },
      (error) => {
        console.error("Error fetching temperature data", error);
      }
    );
  }
}