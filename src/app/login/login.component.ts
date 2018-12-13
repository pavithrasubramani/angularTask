import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }
onSubmit(username:string,password:string){
  debugger;
  if(username==="pavithra" && password==="abcd"){
    this.router.navigate(['/home'])
    localStorage.setItem('currentUser','username');

  }
 else {
   alert("Invalid Username and Password");
 } 
}
  ngOnInit() {
  }

}
