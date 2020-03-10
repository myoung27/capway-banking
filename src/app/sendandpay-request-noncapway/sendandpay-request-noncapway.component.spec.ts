import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpayRequestNoncapwayComponent } from './sendandpay-request-noncapway.component';

describe('SendandpayRequestNoncapwayComponent', () => {
  let component: SendandpayRequestNoncapwayComponent;
  let fixture: ComponentFixture<SendandpayRequestNoncapwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpayRequestNoncapwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpayRequestNoncapwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
