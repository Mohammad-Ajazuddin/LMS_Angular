import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 
  responseArr:any[]=[];
  registrationSuccess!: boolean;
  registrationError!: boolean;
  errorMessage!:string;
  successMessage!:string;
  regForm!:any;
  hidePassword:boolean = true;

  constructor(private fb:FormBuilder,private http: HttpClient, private registrationService:RegistrationService){}

  // regForm = this.fb.group(
  //   {
  //     role:[null,Validators.required],
  //     name:[null,Validators.required],
  //     email:[null,[Validators.required,Validators.email]],
  //     password:[null,[Validators.required,Validators.minLength(6)]],
  //     mobile:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  //     dateOfJoining:[null,Validators.required],
  //     managerId:[null,Validators.required]
  //   }
  // )

  ngOnInit(): void {
      this.getAllManagers();
      this.regForm = this.fb.group({
        role: ['EMPLOYEE', Validators.required], // Default role set to 'EMPLOYEE'
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        dateOfJoining: ['', Validators.required],
        managerId: [''] // Manager ID Optional as it is not required for manager role
      });
  
      // if role is employee then it is required
      this.regForm.get('role').valueChanges.subscribe((role: string) => {
        if (role === 'EMPLOYEE') {
          this.regForm.get('managerId').setValidators(Validators.required);
        } else {
          this.regForm.get('managerId').clearValidators();
        }
        this.regForm.get('managerId').updateValueAndValidity();
      });
  }

  getAllManagers(): void {
    //no need to take as <any[]>
    this.http.get<any>('http://localhost:8081/api/auth/getAllManagers').subscribe(
      (response) => {
        this.responseArr = response.data;
        console.log(this.responseArr);
      },
      (error) => {
        console.error('Error fetching managers:', error);
      }
    );
  }


    onSubmitRegForm() {
      if (this.regForm.valid) {
        const formData = this.regForm.value;
        this.registrationService.registerUser(formData).subscribe(
          response => {
            if (response.status === "Success") {
              this.registrationSuccess = true;
              this.registrationError = false;
              this.successMessage = response.message;
              this.regForm.reset();
              // to clear the issue of validations after form submission
              this.regForm.markAsPristine(); // Mark the form as pristine
              this.regForm.markAsUntouched(); // Mark the form as untouched
              this.regForm.setErrors(null); // Clear any errors

              // Mark all form controls as untouched to prevent validation errors from showing
              Object.keys(this.regForm.controls).forEach(controlName => {
                this.regForm.get(controlName)?.markAsUntouched();
              });

            } else {
              this.registrationSuccess = false;
              this.registrationError = true;
              this.errorMessage = response.message;
              this.regForm.reset();
            }
          },
          error => {
            this.registrationSuccess = false;
            this.registrationError = true;
            this.errorMessage = error.error.message;
            this.regForm.reset();
          }
        );
      }
    }

    //for error checking
    // checkFormControl()
    // {
    //   console.log(this.regForm);
    // }
}
