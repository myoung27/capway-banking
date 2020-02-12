import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuSecurityComponent } from './sub-menu-security.component';

describe('SubMenuSecurityComponent', () => {
  let component: SubMenuSecurityComponent;
  let fixture: ComponentFixture<SubMenuSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
