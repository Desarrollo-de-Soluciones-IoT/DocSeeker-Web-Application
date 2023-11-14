import {Component, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";
import {ActivatedRoute} from "@angular/router";

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

  constructor(
    private sourcesService: SourcesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['idPatient'];

    this.sourcesService.getByIdSources('patients',this.idPatient).subscribe((data: any): void => {
      this.currentPatient = data;

    });


  }
}
