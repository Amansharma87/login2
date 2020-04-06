import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
 @Output()data={
        "array":[
       { username:"aman@gmail.com",
        password:"123",
        name:"Aman sharma",
        domain:"web developer"
    }
    
    ]}
    ;
  constructor(private router_:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:any){
      
    for (let i = 0; i < this.data.array.length; i++) {
       if(this.data.array[i].username==form.value.username&&this.data.array[i].password==form.value.password)
       {
           console.log(this.data.array[i].name)
           this.router_.navigate(['admin']);

       }
       else{
           console.log('false')
       }
        
    }
   

 }

}
