import { Component } from '@angular/core';
import { GetAllLeavesService } from '../get-all-leaves.service';

@Component({
  selector: 'app-get-all-leaves',
  templateUrl: './get-all-leaves.component.html',
  styleUrls: ['./get-all-leaves.component.css']
})
export class GetAllLeavesComponent {

  responseData:any;

  constructor(private getAllLeavesService:GetAllLeavesService){}

  managerId = localStorage.getItem('userId');

  ngOnInit(): void {
    this.getAllLeavesService.getAllLeavesUnderManager(this.managerId).subscribe(
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
