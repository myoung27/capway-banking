import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDisputeTransactionComponent } from './security-dispute-transaction.component';

describe('SecurityDisputeTransactionComponent', () => {
  let component: SecurityDisputeTransactionComponent;
  let fixture: ComponentFixture<SecurityDisputeTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDisputeTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDisputeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
