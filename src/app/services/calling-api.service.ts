import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallingApiService {

  constructor(
    private http: HttpClient
  ) { }

  getInfo(): Observable<any>{
    return this.http.get('https://hpb.health.gov.lk/api/get-current-statistical');
  }
}
