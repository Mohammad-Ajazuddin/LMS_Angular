import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private loginService:LoginService){}

  //name = localStorage.getItem('name');

  isLogin()
  {
    return this.loginService.isLoggedIn();
  }

  logout()
  {
    this.loginService.logout();
  }
}
