import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeLeavesViewService {

  // startDate = "";
  // endDate="";

  constructor(private http:HttpClient) { }

  getEmployeeView(managerId:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.get(`http://localhost:8081/manager/${managerId}/getEmployeeWiseLeaves`,httpOptions);
  }


  getDateWise(managerId:any,formData:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.post(`http://localhost:8081/manager/${managerId}/getDateWiseLeaveInfo`,formData,httpOptions);
  }
}
