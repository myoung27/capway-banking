import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuSendandpayComponent } from './sub-menu-sendandpay.component';

describe('SubMenuSendandpayComponent', () => {
  let component: SubMenuSendandpayComponent;
  let fixture: ComponentFixture<SubMenuSendandpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuSendandpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuSendandpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
