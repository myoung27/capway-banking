import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWithdrawlsComponent } from './account-withdrawls.component';

describe('AccountWithdrawlsComponent', () => {
  let component: AccountWithdrawlsComponent;
  let fixture: ComponentFixture<AccountWithdrawlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWithdrawlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWithdrawlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
