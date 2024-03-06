import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetEmployeeLeavesViewService } from '../get-employee-leaves-view.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {
    managerId = localStorage.getItem('userId');
    startDate='';
    endDate='';
    constructor(private router:Router,private getEmployeeLeavesViewService:GetEmployeeLeavesViewService){}

    // setDates()
    // {
    //   this.getEmployeeLeavesViewService.startDate = this.startDate;
    //   this.getEmployeeLeavesViewService.endDate = this.endDate;
    //   this.router.navigate([`/${this.managerId}/${this.startDate}/${this.endDate}`]);
    // }
}
