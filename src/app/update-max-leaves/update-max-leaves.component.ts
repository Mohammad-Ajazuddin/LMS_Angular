import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpdateMaxLeavesService } from '../update-max-leaves.service';

@Component({
  selector: 'app-update-max-leaves',
  templateUrl: './update-max-leaves.component.html',
  styleUrls: ['./update-max-leaves.component.css']
})
export class UpdateMaxLeavesComponent implements OnInit{

  responseData:any;
  existingLeaveTypesData :any

  constructor(private fb:FormBuilder,private updateMaxLeavesService:UpdateMaxLeavesService){}


  updateMaxLeaves = this.fb.group(
    {
      leaveType:['',Validators.required],
      maximumLeaves:['',Validators.required]
    }
  )

  ngOnInit(): void {
      this.loadExistingLeaveTypeInfo();
  }

  loadExistingLeaveTypeInfo()
  {
    this.updateMaxLeavesService.getMaxLeavesDetails().subscribe(
      response=>{
        if(response.status=="Success")
        {
          this.existingLeaveTypesData = response.data;
        }
        else{
          alert(response.message);
        }
      },
      error=>{
        alert("Error while retrieving existing leave types info " + error.error.message);
      }
    );
  }

  onUpdate(){
    if(this.updateMaxLeaves.valid)
    {
      const managerId = localStorage.getItem('userId');

      this.updateMaxLeavesService.updateMaxLeavesDetails(this.updateMaxLeaves.value).subscribe(
        response=>{
          if(response.status=="Success"){
            this.responseData = response.data;
            this.loadExistingLeaveTypeInfo(); //To get updated data in table
            alert(response.message);
          }
          else{
            alert(response.message);
          }
        },
        error=>{
          alert("Error occured while updating "+error.error.message);
        }

      )
    
    }

  }

}
