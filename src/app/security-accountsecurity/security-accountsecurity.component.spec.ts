import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAccountsecurityComponent } from './security-accountsecurity.component';

describe('SecurityAccountsecurityComponent', () => {
  let component: SecurityAccountsecurityComponent;
  let fixture: ComponentFixture<SecurityAccountsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAccountsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAccountsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
