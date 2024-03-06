import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginApiUrl = "http://localhost:8081/api/auth/login";

  // currentUserUrl = "http://localhost:8081/api/auth/getCurrentUser";
  
  constructor(private http: HttpClient,private router:Router) { }

  userLogin(userCredentials: any): Observable<any> {
    return this.http.post(this.loginApiUrl, userCredentials);
  }

  // getCurrentUser(userEmail: any):Observable<any>
  // {
  //   return this.http.post(this.currentUserUrl,userEmail);
  // }

  isLoggedIn()
  {
    let token = localStorage.getItem('token');

    if(token==='' || token==null || token===undefined)
    {
      return false;
    }
    else{
      return true;
    }
  }

  logout()
  {
    localStorage.clear();
    alert("User Logged out successfully");
    this.router.navigate(['api/auth/login']);
  }

  isManager()
  {
    let userRole = localStorage.getItem('role')
    if(userRole==="MANAGER")
    {
      return true;
    }
    return false;
  }

  isEmployee()
  {
    let userRole = localStorage.getItem('role')
    if(userRole==="EMPLOYEE")
    {
      return true;
    }
    return false;
  }

}
