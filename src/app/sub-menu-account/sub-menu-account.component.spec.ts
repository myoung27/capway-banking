import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuAccountComponent } from './sub-menu-account.component';

describe('SubMenuAccountComponent', () => {
  let component: SubMenuAccountComponent;
  let fixture: ComponentFixture<SubMenuAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
