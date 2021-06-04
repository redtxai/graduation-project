import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { StatusTicket } from 'src/app/models/ticket'

@Component({
  selector: 'app-status-ticket',
  templateUrl: './status-ticket.component.html',
  styleUrls: ['./status-ticket.component.scss']
})
export class StatusTicketComponent {

  @Input()
  statusSelected = 0

  @Output()
  statusUpdate = new EventEmitter<number>()

  statusTicket = StatusTicket

  changeStatus(status: StatusTicket) {
    if (status !== this.statusSelected) {
      this.statusUpdate.emit(status)
    }
  }
}
