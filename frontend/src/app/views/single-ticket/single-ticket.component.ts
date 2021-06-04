import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { StatusTicket, Ticket } from 'src/app/models/ticket'
import { TicketService } from 'src/app/services/ticket.service'

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss']
})
export class SingleTicketComponent implements OnInit {

  ticket: Ticket = new Ticket()
  statusTicket = StatusTicket

  constructor(private ticketService: TicketService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.ticketService.getSingleTicket(id).subscribe(ticket => this.ticket = ticket)
  }

}
