import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendandpaySendNoncapwayComponent } from './sendandpay-send-noncapway.component';

describe('SendandpaySendNoncapwayComponent', () => {
  let component: SendandpaySendNoncapwayComponent;
  let fixture: ComponentFixture<SendandpaySendNoncapwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendandpaySendNoncapwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendandpaySendNoncapwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
