import { Component } from '@angular/core';
import {Doctor} from "../../../interfaces/doctor";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SourcesService} from "../../../services/sources.service";
import {LogInService} from "../../../services/log-in.service";
import {Router} from "@angular/router";
import {DoctorResource} from "../../../interfaces/doctor-resource";

@Component({
  selector: 'app-log-in-doctor',
  templateUrl: './log-in-doctor.component.html',
  styleUrls: ['./log-in-doctor.component.css']
})
export class LogInDoctorComponent {
  rpassword: string ='';
  doctor: DoctorResource = {} as DoctorResource;
  doctors: Array<any> = [];
  signInForm: FormGroup;
  logInForm: FormGroup  = new FormGroup({
    dni: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private newsSource: SourcesService, private loginService:LogInService, public builder:FormBuilder, private router: Router) {
    this.signInForm = this.builder.group({
      dni: ['',[Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['',[Validators.required]],
      area: ['',[Validators.required]],
      age: ['',[Validators.required, Validators.min(24), Validators.max(80)]],
      email: ['',[Validators.required, Validators.email]],
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

  get area(){
    return this.signInForm.controls['area'];
  }

  register(){
    if ((this.doctor.password == this.rpassword) && this.rpassword !='' && this.doctor.email!=''
      && this.doctor.name !='' && this.doctor.dni!='' && this.doctor.speciality!='') {
      this.loginService.registerDoctor(this.doctor).subscribe();

    } else if (this.doctor.password != this.rpassword) {
      console.log("ingrese su contraseña bien")
    }
    this.doctor={id: 0, dni:'', password:'', name:'', speciality:'', description:'', patientsAssisted:'', experienceYears:'', email:'', doctorFee:'',
      profilePhoto: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg", birthDate: '', phoneNumber: ''
    };
    this.rpassword='';
  }

  ngOnInit() {

  }

  submitSignInForm() {
    let user = {
      dni: this.logInForm.value.dni ?? '',
      password: this.logInForm.value.password ?? ''
    }

    this.loginService.loginDoctor(user)
      .subscribe(response => {
        console.log("RESPONSE LOGIN DOCTOR",response)
        localStorage.setItem('currentDoctor', JSON.stringify(response[0]));
        this.router.navigate(['/dashboardDoctor'])
      });
  }
}
