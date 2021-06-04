import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTicketPopupComponent } from './create-ticket-popup.component';

describe('CreateTicketPopupComponent', () => {
  let component: CreateTicketPopupComponent;
  let fixture: ComponentFixture<CreateTicketPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTicketPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTicketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
