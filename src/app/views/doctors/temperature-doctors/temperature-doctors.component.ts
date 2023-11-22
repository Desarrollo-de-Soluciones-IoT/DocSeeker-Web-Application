import {Component, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../services/patient.service";
import {TemperatureService} from "../../../services/temperature.service";

@Component({
  selector: 'app-temperature-doctors',
  templateUrl: './temperature-doctors.component.html',
  styleUrls: ['./temperature-doctors.component.css']
})
export class TemperatureDoctorsComponent implements OnInit{
  idPatient =""
  medicalInformation: any;
  currentPatient: any;
  patient: any;
  temperatures: any[] = []; // Variable para almacenar los datos de temperatura

  constructor(
    private patientService: PatientService,
    private temperatureService: TemperatureService, // Inyecta el servicio de temperatura

    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['idPatient'];

    this.patientService.getById(this.idPatient).subscribe((data: any): void => {
      this.currentPatient = data;

    });

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
