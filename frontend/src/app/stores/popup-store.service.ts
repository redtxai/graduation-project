import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PopupStoreService {
  private readonly _showPopup = new BehaviorSubject<boolean>(false)

  readonly showPopup$ = this._showPopup.asObservable()

  get showPopup(): boolean {
    return this._showPopup.getValue()
  }


  set showPopup(val: boolean) {
    this._showPopup.next(val)
  }

  togglePopup() {
    this.showPopup = !this.showPopup
  }
}
