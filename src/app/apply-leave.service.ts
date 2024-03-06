import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  constructor(private http:HttpClient) { }


  applyLeave(leaveFormData:any):Observable<any>{

    const userId = localStorage.getItem('userId');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    //Options at last
    return this.http.post(`http://localhost:8081/employee/${userId}/apply`,leaveFormData,httpOptions);
  }

}
