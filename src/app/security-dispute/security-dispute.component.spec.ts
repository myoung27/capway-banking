import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDisputeComponent } from './security-dispute.component';

describe('SecurityDisputeComponent', () => {
  let component: SecurityDisputeComponent;
  let fixture: ComponentFixture<SecurityDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
