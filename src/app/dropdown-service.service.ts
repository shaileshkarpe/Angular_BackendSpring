import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { gender, state } from 'src/gender/gender';

@Injectable({
  providedIn: 'root'
})
export class DropdownServiceService {

  apiGenderUrl = "http://localhost:8081/dropdown-data";
  apiStateUrl="http://localhost:8081/dropdownstate-data";



  constructor(private http: HttpClient) {

   }

getDropdownStateData(): Observable<state[]> {
  return this.http.get<state[]>(this.apiStateUrl);
}

  getDropdownData(): Observable<gender[]> {

    return this.http.get<gender[]>(this.apiGenderUrl);

  }

}
