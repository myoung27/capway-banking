import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAllTransactionsComponent } from './account-all-transactions.component';

describe('AccountAllTransactionsComponent', () => {
  let component: AccountAllTransactionsComponent;
  let fixture: ComponentFixture<AccountAllTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAllTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAllTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
