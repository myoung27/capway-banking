import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpayRequestCapwayComponent } from './sendandpay-request-capway.component';

describe('SendandpayRequestCapwayComponent', () => {
  let component: SendandpayRequestCapwayComponent;
  let fixture: ComponentFixture<SendandpayRequestCapwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpayRequestCapwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpayRequestCapwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
