import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from'@angular/material/dialog'
import {MatSelectModule} from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';
import { LoginService } from './login.service';
//import { AuthInterceptor } from './auth.interceptor';
import { Routes, RouterModule } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveInfoComponent } from './leave-info/leave-info.component';
import { HeaderComponent } from './header/header.component';
import { AllLeavesComponent } from './all-leaves/all-leaves.component';
import { GetAllLeavesComponent } from './get-all-leaves/get-all-leaves.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { SpecificLeaveComponent } from './specific-leave/specific-leave.component';
import { ApproveRejectComponent } from './approve-reject/approve-reject.component';
import { UpdateMaxLeavesComponent } from './update-max-leaves/update-max-leaves.component';
import { EmployeeWiseLeavesComponent } from './employee-wise-leaves/employee-wise-leaves.component';
import { DateWiseLeavesComponent } from './date-wise-leaves/date-wise-leaves.component';
import { AuthGuard } from './auth.guard';
import { ManagerAuthGuard } from './manager-auth.guard';
import { EmployeeAuthGuard } from './employee-auth.guard';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { ChildAuthGuard } from './child-auth.guard';

const routes : Routes = [
  {
    path:"",component:HomeComponent,
    title:"LMS-HOME"
  },
  {
    path:"api/auth/login",component:LoginComponent
  },
  {
    path:"api/auth/register",component:RegisterComponent
  },
  {
    path:"employee", component:EmployeeDashboardComponent,
    title:"Employee Dashboard",
    children : [
      {
        path:":id/apply",component:ApplyLeaveComponent,
        title:"Apply Leave"
      },
      {
        path:":id/leaves",component:AllLeavesComponent,
        title:"All Leaves"
      },
      {
        path:":id/leaves/:lid",component:LeaveInfoComponent,
        title:"Leave Information"
      },
    ],
    canActivate:[AuthGuard,EmployeeAuthGuard],
    canActivateChild:[ChildAuthGuard]
  },
  {
    path:"manager", component:ManagerDashboardComponent,
    title:"Manager Dashboard",
    children : [
      {
        path:":id/leaves",component:GetAllLeavesComponent,
        title:"All leaves of employees under you"
      },
      {
        path:":id/leaves/:lid",component:EmployeeLeavesComponent,
        title:"Leaves of employee"
      },
      {
        path:":id/leaves/:lid",component:SpecificLeaveComponent,
        title:"Leave Info of employee"
      },
      {
        path:":id/leaves/:eid/checkLeave/:lid",component:ApproveRejectComponent,
        title:"Approve/Reject Leave"
      },
      {
        path:":id/updateLeaveType",component:UpdateMaxLeavesComponent,
        title:"Update max leaves"
      },
      {
        path:":id/getEmployeeWiseLeaves",component:EmployeeWiseLeavesComponent,
        title:"All employees leave view"
      },
      {
        path:":id/getDateWiseLeaves",component:DateWiseLeavesComponent,
        title:"Date wise leave view"
      },
    ],
    canActivate:[AuthGuard,ManagerAuthGuard],
    canActivateChild:[ChildAuthGuard]
  },
  {
    path:"unauthorised", component:UnauthorisedComponent,
    title:"Unauthorised Acess"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ManagerDashboardComponent,
    EmployeeDashboardComponent,
    ApplyLeaveComponent,
    LeaveInfoComponent,
    HeaderComponent,
    AllLeavesComponent,
    GetAllLeavesComponent,
    EmployeeLeavesComponent,
    SpecificLeaveComponent,
    ApproveRejectComponent,
    UpdateMaxLeavesComponent,
    EmployeeWiseLeavesComponent,
    DateWiseLeavesComponent,
    UnauthorisedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistrationService,
    LoginService,
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: AuthInterceptor,
    //  multi: true
    //}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
