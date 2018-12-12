import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  constructor(private router: Router) { }
  onClick(){
    this.router.navigate(['/tickets'])
    
  }
  ngOnInit() {
  }

}
