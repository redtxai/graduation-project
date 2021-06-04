import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListTicketModule } from './views/list-ticket/list-ticket.module'
import { CreateTicketPopupModule } from './components/create-ticket-popup/create-ticket-popup.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListTicketModule,
    CreateTicketPopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
