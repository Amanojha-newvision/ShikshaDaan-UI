import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  createPassword(model: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/SetupAccount/createpassword`, model)
  }

}
