import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeelist.module';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-employeelist',
  templateUrl: 'employeelist.component.html',
  styleUrls: ['employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
server=false

  employee:Employee[]=[
    new Employee('Aditya','web developer','gaziabad',1234),
    new Employee('harsh','web series watcher','anupseher',5678)
  ];
  constructor() { }

  ngOnInit(){
  }
  adde(){
    this.server=true;
  }
 onSubmit(f:NgForm){
  console.log(f.value)
 
  
    
    this.employee.push(new Employee(f.value.name,f.value.position,f.value.office,f.value.salary));
    f.reset();
    this.server=false;
 }
}