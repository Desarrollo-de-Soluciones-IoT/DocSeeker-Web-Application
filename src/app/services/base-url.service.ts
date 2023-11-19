// base-url.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseUrlService {
  baseUrl = 'http://localhost:8080';
}
