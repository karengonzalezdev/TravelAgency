import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCrearComponent } from './role-crear.component';

describe('RoleCrearComponent', () => {
  let component: RoleCrearComponent;
  let fixture: ComponentFixture<RoleCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
