import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User/user';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseurl="http://localhost:8081/user";

  constructor(private http:HttpClient) { }

  registeruser(user:User):Observable<Object>{
    console.log(user)
    return this.http.post(this.baseurl,user);
  }
}
