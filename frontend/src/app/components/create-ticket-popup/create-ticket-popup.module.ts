import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { CreateTicketPopupComponent } from './create-ticket-popup.component'

@NgModule({
  declarations: [
    CreateTicketPopupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateTicketPopupComponent
  ],
  providers: [],
})
export class CreateTicketPopupModule { }
