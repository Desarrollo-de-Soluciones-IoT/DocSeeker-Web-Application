import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseUrlService} from "./base-url.service";

@Injectable({
  providedIn: 'root'
})
export class PulsesService {
  apikey: string = '';

  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) { }


  getPulses(): Observable<Object>{
    return this.http.get(`${this.baseUrlService.baseUrl}/api/v1/pulse`)
  }

}
