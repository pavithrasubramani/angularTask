import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Insert} from '../insert';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {
  private insert: Insert[];
  constructor(private router: Router) { }
  onClick(name,comment){
          let a =JSON.parse(localStorage.getItem('key'));
          a.push(new Insert(name,comment));
         this.insert = a;
         localStorage.setItem('key',JSON.stringify(this.insert));
         this.router.navigate(['/tickets'])
         }
         
  
  ngOnInit() {    
    this.insert = [];
    let data= JSON.parse(localStorage.getItem('key'));
    if(data === null){
      localStorage.setItem('key',JSON.stringify([]));
    }
  }
}



