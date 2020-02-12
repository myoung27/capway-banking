import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpayBillpayhistoryComponent } from './sendandpay-billpayhistory.component';

describe('SendandpayBillpayhistoryComponent', () => {
  let component: SendandpayBillpayhistoryComponent;
  let fixture: ComponentFixture<SendandpayBillpayhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpayBillpayhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpayBillpayhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
