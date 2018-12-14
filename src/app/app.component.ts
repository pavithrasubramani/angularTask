import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 title = 'sample-a'; 
 private apiurl= 'http://localhost:8080/spring/tickets';
 
 }
 



