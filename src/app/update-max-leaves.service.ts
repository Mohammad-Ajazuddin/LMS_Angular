import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateMaxLeavesService {

  constructor(private http:HttpClient) { }

  getMaxLeavesDetails():Observable<any>{

    const managerId = localStorage.getItem('userId');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.get(`http://localhost:8081/manager/${managerId}/getMaxLeavesDetails`,httpOptions);

  }

  updateMaxLeavesDetails(formData:any):Observable<any>{

    const managerId = localStorage.getItem('userId');

    const httpOptions = {
      headers : new HttpHeaders({
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.put(`http://localhost:8081/manager/${managerId}/updateLeaveType`,formData,httpOptions);

  }
}
