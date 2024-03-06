import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApplyLeaveService } from '../apply-leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {

  responseArr:any[]=[];
  registrationSuccess!: boolean;
  registrationError!: boolean;
  errorMessage!:string;
  successMessage!:string;
  regForm!:any;
  hidePassword:boolean = true;

  constructor(private fb:FormBuilder,private applyLeaveService:ApplyLeaveService, private router:Router){}

  applyLeave = this.fb.group(
    {
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      reason:['',Validators.required],
      type:['',Validators.required]
    }
  )

  name = localStorage.getItem('name');

  onSubmit()
  {
    if(this.applyLeave.valid)
    {
      const leaveFormData = this.applyLeave.value;
      this.applyLeaveService.applyLeave(leaveFormData).subscribe(
        response=>{
          if(response.status==="Success")
          {
              alert(response.message);
              this.applyLeave.reset();
              //this.router.navigate([`/${localStorage.getItem('userId')}/leaves`]) did not work
              this.router.navigate(['/employee', localStorage.getItem('userId'), 'leaves']); // worked
          }
          else{
            alert("Eroor occurred "+response.message);
          }
        },
        error=>{
          alert("Error occured while applying leave "+error.message);
        }
      )
    }
  }

}
