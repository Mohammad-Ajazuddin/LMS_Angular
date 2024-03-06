import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';
// import { LoginComponent } from '../login/login.component';
// import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private loginService:LoginService,private router:Router){}
  

  isLoggedIn()
  {
    return this.loginService.isLoggedIn();
  }

  navigateTo(){
    if(this.loginService.isEmployee())
    {
      this.router.navigate(['employee']);
    }
    else if(this.loginService.isManager())
    {
      this.router.navigate(['manager']);
    }
  }

}
