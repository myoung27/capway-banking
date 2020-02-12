import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDisputehistoryComponent } from './security-disputehistory.component';

describe('SecurityDisputehistoryComponent', () => {
  let component: SecurityDisputehistoryComponent;
  let fixture: ComponentFixture<SecurityDisputehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDisputehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDisputehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
