import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  apikey: string = '';

  constructor(private http: HttpClient) { }


  getTemperatures(): Observable<Object>{
    return this.http.get(`http://127.0.0.1:8000/temperatures`)
  }

}
