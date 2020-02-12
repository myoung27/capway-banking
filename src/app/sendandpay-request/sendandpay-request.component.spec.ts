import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpayRequestComponent } from './sendandpay-request.component';

describe('SendandpayRequestComponent', () => {
  let component: SendandpayRequestComponent;
  let fixture: ComponentFixture<SendandpayRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpayRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpayRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
