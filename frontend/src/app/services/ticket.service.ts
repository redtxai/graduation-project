import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Ticket } from '../models/ticket'

const url = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly _tickets = new BehaviorSubject<Ticket[]>([])

  readonly tickets$ = this._tickets.asObservable()

  constructor(private http: HttpClient) { }

  get tickets(): Ticket[] {
    return this._tickets.getValue()
  }


  set tickets(val: Ticket[]) {
    this._tickets.next(val)
  }

  getAllTickets() {
    this.http.get(`${url}/support-tickets`).subscribe((tickets: any) => {
      this.tickets = <Ticket[]>tickets
    })
  }

  getSingleTicket(id: number): Observable<Ticket> {
    return this.http.get(`${url}/support-tickets/${id}`).pipe(map(ticket => ticket as Ticket))
  }

  createSingleTicket(ticket: Ticket) {
    this.http.post(`${url}/support-tickets`, ticket).subscribe(
      data => {
        this.getAllTickets()
      },
      error => console.log('oops', error)
    )
  }

  removeSingleTicket(id: number) {
    this.http.delete(`${url}/support-tickets/${id}`).subscribe(
      data => {
        this.getAllTickets()
      },
      error => console.log('oops', error)
    )
  }

  updateSingleTicket(ticket: Ticket) {
    this.http.put(`${url}/support-tickets/${ticket.id}`, ticket).subscribe(
      data => {
        this.getAllTickets()
      },
      error => console.log('oops', error)
    )
  }
}
