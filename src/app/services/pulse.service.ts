import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PulsesService {
  apikey: string = '';

  constructor(private http: HttpClient) { }


  getPulses(): Observable<Object>{
    return this.http.get(`http://127.0.0.1:8000/pulses`)
  }

}
