import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomeComponent } from './home/home.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { AuthGuard } from './auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketsComponent,
    HomeComponent,
    TicketlistComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     
     {
       path:'login',
       component:LoginComponent,       
     },
     {
      path:'home',
      component:HomeComponent,
      canActivate: [AuthGuard]
     },
     {
       path:'tickets',
       component:TicketsComponent,
       canActivate: [AuthGuard]
      },
      {
        path:'ticketlist',
        component:TicketlistComponent,
        canActivate: [AuthGuard]
      }
      
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

