import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.Component";
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from "@angular/forms";
import {  RouterModule,Routes } from "@angular/router";
import { EmployeelistComponent } from './employee/employee list/employeelist.component';
import { loginComponent } from './employee/login/login.component';

 const approutes:Routes=[
  {path:'',
  component:loginComponent
 },
  {path:'admin',
  component:EmployeeComponent,
 }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(approutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
