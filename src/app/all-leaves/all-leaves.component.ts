import { Component, OnInit } from '@angular/core';
import { GetAllLeavesService } from '../get-all-leaves.service';

@Component({
  selector: 'app-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrls: ['./all-leaves.component.css']
})
export class AllLeavesComponent implements OnInit {
    responseData : any;

    constructor(private getAllLeavesService: GetAllLeavesService){}


    employeeId = localStorage.getItem('userId');
    
    
    ngOnInit(): void {
        this.getAllLeavesService.getAllLeaves(this.employeeId).subscribe(
          response=>{
            if(response.status=="Success")
            {
              this.responseData = response.data;
            }
          },
          error=>
          {
            alert("Error occured while retreiving "+ error.message);
          }
        )
    }

}
