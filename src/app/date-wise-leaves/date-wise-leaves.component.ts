import { Component, Input } from '@angular/core';
import { GetEmployeeLeavesViewService } from '../get-employee-leaves-view.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-wise-leaves',
  templateUrl: './date-wise-leaves.component.html',
  styleUrls: ['./date-wise-leaves.component.css']
})
export class DateWiseLeavesComponent {

  responseData : any;
  dataAvailable:boolean = false;
  formValid:boolean = false;
  formData:any;
  // @Input() startDate:any;
  // @Input() endDate:any;

  // startDate:any;
  // endDate:any;

  constructor(private getEmployeeLeavesViewService:GetEmployeeLeavesViewService, private fb:FormBuilder){}


  dateWise = this.fb.group(
    {
      startDate : ['',Validators.required],
      endDate : ['',Validators.required]
    }
  );
  
  onSubmit(): void {
    if(this.dateWise.valid){
      this.formValid = this.dateWise.valid;
      this.formData = this.dateWise.value;
      // let startDate = this.dateWise.value.startDate; //2024-03-06
      // let endDate = this.dateWise.value.endDate;
      // //console.log("start date is "+JSON.stringify(startDate)); //start date is "2024-03-05T18:30:00.000Z" getting one less 
      // const managerId = localStorage.getItem('userId');
      // startDate = JSON.stringify(startDate).substring(1,11);
      // endDate = JSON.stringify(endDate).substring(1,11);
      // this.getEmployeeLeavesViewService.getDateWise(managerId,startDate,endDate).subscribe(

      const managerId = localStorage.getItem('userId');
      this.getEmployeeLeavesViewService.getDateWise(managerId,this.dateWise.value).subscribe(
        response=>{
          if(response.status=="Success")
          {
            this.responseData = response.data;
            if(this.responseData.length==0)
            {
              this.dataAvailable=false;
            }
            else{
              this.dataAvailable=true;
            }
            console.log(this.responseData);
          }
        },
        error=>
        {
          alert("Error occured while retreiving "+ error.error.message);
        }
      )
    }
  }
}

