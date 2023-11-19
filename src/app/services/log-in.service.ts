import { Injectable } from '@angular/core';
import {Patient} from "../interfaces/patient";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../interfaces/doctor";
import {Observable} from "rxjs";
import {DoctorResource} from "../interfaces/doctor-resource";
import {DoctorsService} from "./doctors.service";
import { BaseUrlService } from './base-url.service';
import {PatientBack} from "../interfaces/patientBack";

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  patients: Patient[] = [];

  constructor(private http: HttpClient, private doctorService: DoctorsService, private baseUrlService: BaseUrlService) {

  }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  registerPatient(patient: Patient | PatientBack){
    const url = `${this.baseUrlService.baseUrl}/api/v1/patients`;
    return this.http.post(url, patient);
  }

  registerDoctor(doctor: DoctorResource){
    const url =`${this.baseUrlService.baseUrl}/api/v1/doctors`;
    return this.http.post(url, doctor);
  }

  updateDoctor(doctor: DoctorResource, id :any){
    const url = `${this.baseUrlService.baseUrl}/api/v1/doctors/${id}`;
    return this.http.put(url, doctor);
  }

  updatePatient(patient: Patient, id :any){
    const url = `${this.baseUrlService.baseUrl}/api/v1/patients/${id}`;
    return this.http.put(url, patient);
  }


  getPatient(dni:string, password:string): Patient | undefined {
    return this.patients.find(patient => patient.dni==dni && patient.password == password);
  }

  showPatient(): Patient[]{
    return this.patients;
  }

  loginDoctor(user: object): Observable<any> {
    return this.http.post(`${this.baseUrlService.baseUrl}/api/v1/doctors/login`, user);
  }

  loginPatient2(user: object): Observable<any> {
    return this.http.post(`${this.baseUrlService.baseUrl}/api/v1/patients/login`, user);
  }
  loginPatient(loginPatient: object) {
    return this.http.post<Patient>(`${this.baseUrlService.baseUrl}/api/v1/patients/login`, loginPatient);
  }
}
