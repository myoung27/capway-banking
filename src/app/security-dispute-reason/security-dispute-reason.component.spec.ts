import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDisputeReasonComponent } from './security-dispute-reason.component';

describe('SecurityDisputeReasonComponent', () => {
  let component: SecurityDisputeReasonComponent;
  let fixture: ComponentFixture<SecurityDisputeReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDisputeReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDisputeReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
