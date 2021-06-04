export const StatusTicketArray: string[]  = [
  'InProgress',
  'Open',
  'Done'
]

export enum StatusTicket {
  Open,
  InProgress,
  Done
}

export class Ticket {
  id?: number
  title: string
  description: string
  priority: number
  status: StatusTicket
  email: string
  refersTo: Array<number> = []

  constructor(title: string = '', description: string = '', priority: number = 0, status: StatusTicket = StatusTicket.Open, email: string  = '') {
    this.title = title
    this.description = description
    this.priority = priority
    this.status = status
    this.email = email
  }
}
