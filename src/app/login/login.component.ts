import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hidePassword:boolean=true;
  role:string = "";
  responseArr:any;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  loginForm = this.fb.group({
    email: [null, [Validators.required,Validators.email]],
    password: [null, Validators.required]
  });

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      //to generate token
      this.loginService.userLogin(credentials).subscribe(
        response => {
          if (response.status === 'Success') {
            // Extract token from response
            
            this.responseArr = response;
            const token = response.data[0].token;
            const userId = response.data[1].id;
            const role = response.data[1].role;
            const name = response.data[1].name;
            console.log(token);
            
            
            // Store token in local storage
          try{
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('role', role);
            localStorage.setItem('name',name);
          }catch(error)
          {
            console.log(error);
          }
            // Redirect to dashboard
            if(localStorage.getItem('role')=="MANAGER")
            {
              alert('Manager Login Successful.');
              this.router.navigate(['/manager']);
            }
            else if(localStorage.getItem('role')=="EMPLOYEE")
            {
              alert('Employee Login Successful.');
              this.router.navigate(['/employee']);
            }
          } else {
            // Display error message
            alert('Login failed. Please try again. '+ response.message);
          }
        },
        error => {
          console.error('Login error:', error);
          // Display error message
          alert('An error occurred while logging in.'+ error.message);
        }
      );
    }
  }


  // storeRole()
  // {
  //   const credentials = this.loginForm.value;
  //   this.loginService.getCurrentUser(credentials.email).subscribe(
  //     response => {
  //       if(response.status==='Success'){
  //         this.role = response.role;
  //         console.log(this.role);

  //         localStorage.setItem('role',this.role);
  //       }
  //     }
  //   )
  // }



}
