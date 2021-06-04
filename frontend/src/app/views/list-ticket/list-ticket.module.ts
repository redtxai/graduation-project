import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StatusTicketComponent } from 'src/app/components/status-ticket/status-ticket.component'

import { StatusTicketPipe } from 'src/app/pipes/status-ticket.pipe'
import { ListTicketComponent } from './list-ticket.component'

@NgModule({
  declarations: [
    ListTicketComponent,
    StatusTicketComponent,
    StatusTicketPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [StatusTicketPipe],
})
export class ListTicketModule { }
