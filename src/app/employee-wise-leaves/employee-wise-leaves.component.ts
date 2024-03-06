import { Component } from '@angular/core';
import { GetEmployeeLeavesViewService } from '../get-employee-leaves-view.service';

@Component({
  selector: 'app-employee-wise-leaves',
  templateUrl: './employee-wise-leaves.component.html',
  styleUrls: ['./employee-wise-leaves.component.css']
})
export class EmployeeWiseLeavesComponent {
  responseData : any;

  constructor(private getEmployeeLeavesViewService:GetEmployeeLeavesViewService){}


  managerId = localStorage.getItem('userId');

  ngOnInit(): void {
    this.getEmployeeLeavesViewService.getEmployeeView(this.managerId).subscribe(
      response=>{
        if(response.status=="Success")
        {
          this.responseData = response.data;
          console.log(this.responseData);
        }
      },
      error=>
      {
        alert("Error occured while retreiving "+ error.message);
      }
    )
  }
}
