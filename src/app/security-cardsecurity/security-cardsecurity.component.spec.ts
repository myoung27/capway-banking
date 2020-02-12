import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCardsecurityComponent } from './security-cardsecurity.component';

describe('SecurityCardsecurityComponent', () => {
  let component: SecurityCardsecurityComponent;
  let fixture: ComponentFixture<SecurityCardsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCardsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCardsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
