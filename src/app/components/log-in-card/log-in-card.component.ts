import {Component} from '@angular/core';
import {Patient} from "../../interfaces/patient";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LogInService} from "../../services/log-in.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../services/sources.service";
import { Router } from '@angular/router';
import {PatientService} from "../../services/patient.service";
import {PatientBack} from "../../interfaces/patientBack";



@Component({
  selector: 'app-log-in-card',
  templateUrl: './log-in-card.component.html',
  styleUrls: ['./log-in-card.component.css'],
  providers: [MatSnackBar]
})

export class LogInCardComponent{

  rpassword: string='';
  patients: Array<Patient> = [];
  patient: Patient ={ id: 0 ,name: '', email: '', password:'', dni: '', height:0, weight: 0, bmi:0,birthday: '', cellphone: '', photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png", allergies: []};
  signInForm: FormGroup;
  logInForm: FormGroup = new FormGroup({
    dni: new FormControl(''),
    password: new FormControl('')
  });
  registerForm: FormGroup = new FormGroup({
    dni: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private snackBar:MatSnackBar, private patientsServices:PatientService, private loginService:LogInService, public builder:FormBuilder, private router: Router) {
    this.patientsServices.getAll().subscribe((data: any): void => {
      this.patients = data;
      this.patient.id = this.patients.length
      console.log("SIZE OF patients: ", this.patients.length);
    });

    this.signInForm = this.builder.group({
      dni: ['',[Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      birthday: ['',[Validators.required]],
      cellphone: ['',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  get dni(){
    return this.signInForm.controls['dni'];
  }

  get password(){
    return this.signInForm.controls['password'];
  }

  get name(){
    return this.signInForm.controls['name'];
  }

  get email(){
    return this.signInForm.controls['email'];
  }

  get cellphone(){
    return this.signInForm.controls['cellphone'];
  }

  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  submitPatientLogInForm() {
    let loginUser = {
      dni: this.logInForm.value.dni ?? '',
      password: this.logInForm.value.password ?? ''
    }

    this.loginService.loginPatient(loginUser)
        .subscribe(response => {
          if (response) {
            console.log("RESPONSE LOGIN DOCTOR", response)
            this.snackBar.open('Login Successful', '', {duration: 1000});
            localStorage.setItem('currentPatient', JSON.stringify(response));
            this.router.navigate(['/dashboard']);
          } else {
            this.snackBar.open('Login Failed', '', {duration: 1000});
          }
        });
  }

  submitPatientRegisterForm() {
    let registerPatient: PatientBack = {
      dni: this.registerForm.value.dni ?? '',
      name: this.registerForm.value.name ?? '',
      birthDate: this.registerForm.value.birthday ?? '',
      phoneNumber: this.registerForm.value.phone ?? '',
      email: this.registerForm.value.email ?? '',
      password: this.registerForm.value.password ?? ''
    }

    console.log(registerPatient)

    this.loginService.registerPatient(registerPatient).subscribe();
  }
}
