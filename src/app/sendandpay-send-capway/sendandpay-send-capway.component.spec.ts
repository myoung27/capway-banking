import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpaySendCapwayComponent } from './sendandpay-send-capway.component';

describe('SendandpaySendCapwayComponent', () => {
  let component: SendandpaySendCapwayComponent;
  let fixture: ComponentFixture<SendandpaySendCapwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpaySendCapwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpaySendCapwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
