import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoCrearComponent } from './permiso-crear.component';

describe('PermisoCrearComponent', () => {
  let component: PermisoCrearComponent;
  let fixture: ComponentFixture<PermisoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
