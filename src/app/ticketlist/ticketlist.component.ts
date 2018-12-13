import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Insert} from '../insert';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {
  private insert: Insert[]=[];
  constructor(private router: Router) { }
  onClick(name,comment){
          debugger;
         this.insert.push(new Insert(name,comment));
         localStorage.setItem('key',JSON.stringify(this.insert));
         
         this.router.navigate(['/tickets'])
         }
         
  
  ngOnInit() {
    
  }
}


[
{
  name:'',
  comment:''

},
{
  name:'',
  comment:''
}

]
