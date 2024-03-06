import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllLeavesService {

  constructor(private http:HttpClient) { }

//EMPLOYEE
  getAllLeaves(employeeId:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.get(`http://localhost:8081/employee/${employeeId}/leaves`,httpOptions);
  }


//MANAGER
  getAllLeavesUnderManager(managerId:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.get(`http://localhost:8081/manager/${managerId}/leaves`,httpOptions);
  }

}
