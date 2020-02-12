import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpaySendComponent } from './sendandpay-send.component';

describe('SendandpaySendComponent', () => {
  let component: SendandpaySendComponent;
  let fixture: ComponentFixture<SendandpaySendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpaySendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpaySendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
