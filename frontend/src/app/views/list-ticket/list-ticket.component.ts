import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusTicket, Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { PopupStoreService } from 'src/app/stores/popup-store.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent implements OnInit {

  constructor(public ticketService: TicketService, private router: Router, private popupStoreService: PopupStoreService) {}

  ngOnInit(): void {
    this.ticketService.getAllTickets()
  }

  openTicket(id: number) {
    this.router.navigate(['/tickets', id])
  }

  openCreateTicketPopup() {
    setTimeout(() => {
      this.popupStoreService.togglePopup()
    }, 100);
  }

  removeTicket(id: number) {
    if (confirm("Are you sure?")) {
      this.ticketService.removeSingleTicket(id)
    }
  }

  updateTicket(ticket: Ticket, status: StatusTicket) {
    if (ticket.status !== status && confirm("Are you sure?")) {
      const parsedTicket: Ticket = ticket
      parsedTicket.status = status
      this.ticketService.updateSingleTicket(parsedTicket)
    }
  }
}
