import { Pipe, PipeTransform } from '@angular/core'
import { StatusTicketArray } from '../models/ticket'

@Pipe({
  name: 'statusTicket'
})
export class StatusTicketPipe implements PipeTransform {

  transform(value: number): string {
    return StatusTicketArray[value]
  }

}
