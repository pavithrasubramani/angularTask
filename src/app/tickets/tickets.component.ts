import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  final:any;
  constructor(private router: Router) { }
onCreate(){
  this.router.navigate(['/ticketlist'])
}
  ngOnInit() {

    var store=localStorage.getItem('key');
    console.log(store);
    this.final=JSON.parse(store);
  }
  logout(){
    localStorage.removeItem('currentUser');
  }   
    

}
