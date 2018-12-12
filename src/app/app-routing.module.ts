import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomeComponent } from './home/home.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';

const appRoutes: Routes = [
    {
   path: '', 
   component: HomeComponent,
   
  },
        { path: 'tickets', 
        component: TicketsComponent
        },
        
      { path: 'ticketlist', 
      component: TicketlistComponent
   },
        { 
          path: 'login',
         component: LoginComponent
         },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


