import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEditarComponent } from './role-editar.component';

describe('RoleEditarComponent', () => {
  let component: RoleEditarComponent;
  let fixture: ComponentFixture<RoleEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
