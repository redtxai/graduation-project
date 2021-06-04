import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Observable, Subscription, fromEvent } from 'rxjs'
import { StatusTicketArray, StatusTicket, Ticket } from 'src/app/models/ticket'
import { TicketService } from 'src/app/services/ticket.service'
import { PopupStoreService } from 'src/app/stores/popup-store.service'

@Component({
  selector: 'app-create-ticket-popup',
  templateUrl: './create-ticket-popup.component.html',
  styleUrls: ['./create-ticket-popup.component.scss']
})
export class CreateTicketPopupComponent implements OnInit, OnDestroy {
  createTicketForm: FormGroup
  statusTicket = StatusTicket
  statusTicketArray = StatusTicketArray

  showErrorStyleMap: Record<string, boolean> = {
    title: false,
    description: false,
    priority: false,
    status: false,
    email: false,
  }

  subscription: Subscription = <Subscription>{}

  constructor(public popupStoreService: PopupStoreService, private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.createTicketForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      status: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
    this.subscription = fromEvent(document, 'keyup').subscribe(e => {
      if ((<KeyboardEvent>e).key === "Escape") {
        this.popupStoreService.togglePopup()
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  validateForm() {
    if (this.createTicketForm.valid) {
      this.ticketService.createSingleTicket(new Ticket(this.createTicketForm.value.title, this.createTicketForm.value.description, this.createTicketForm.value.priority, this.createTicketForm.value.status, this.createTicketForm.value.email))
      this.createTicketForm.reset()
      this.popupStoreService.togglePopup()
    } else {
      Object.keys(this.createTicketForm.controls).forEach(field => {
        const control = this.createTicketForm.get(field)

        if (control) {
          this.showErrorStyleMap[field] = control.status !== "VALID"
        }
      })
    }
  }

  reset() {
    this.createTicketForm.reset()
    Object.keys(this.showErrorStyleMap).forEach(field => {
      this.showErrorStyleMap[field] = false
    })
  }

}
