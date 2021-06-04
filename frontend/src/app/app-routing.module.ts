import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListTicketComponent } from './views/list-ticket/list-ticket.component'
import { SingleTicketComponent } from './views/single-ticket/single-ticket.component'

const routes: Routes = [
  { path: 'tickets', component: ListTicketComponent },
  { path: 'tickets/:id', component: SingleTicketComponent },
  { path: '',   redirectTo: '/tickets', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
