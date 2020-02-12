import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpayTransferhistoryComponent } from './sendandpay-transferhistory.component';

describe('SendandpayTransferhistoryComponent', () => {
  let component: SendandpayTransferhistoryComponent;
  let fixture: ComponentFixture<SendandpayTransferhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpayTransferhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpayTransferhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
