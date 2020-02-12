import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpayBillpayComponent } from './sendandpay-billpay.component';

describe('SendandpayBillpayComponent', () => {
  let component: SendandpayBillpayComponent;
  let fixture: ComponentFixture<SendandpayBillpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpayBillpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpayBillpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
