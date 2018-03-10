import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DashboardModule} from './dashboard/dashboard.module';
import {RouterModule} from '@angular/router';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import {EmployeeCountComponent} from './employee/employeeCount.component';
import { HighlightDirective } from './employee/highlight.directive';
import { WelcomeComponent } from './welcome/welcome.component';
import{PageNotFoundComponent} from'./Others/pageNotFound.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe,EmployeeCountComponent, HighlightDirective,
     WelcomeComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,DashboardModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'employee',component:EmployeeListComponent},
      {path:'employee/:code',component:EmployeeListComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent},        //wild card route
       
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
