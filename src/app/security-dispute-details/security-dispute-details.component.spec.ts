import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDisputeDetailsComponent } from './security-dispute-details.component';

describe('SecurityDisputeDetailsComponent', () => {
  let component: SecurityDisputeDetailsComponent;
  let fixture: ComponentFixture<SecurityDisputeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDisputeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDisputeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
