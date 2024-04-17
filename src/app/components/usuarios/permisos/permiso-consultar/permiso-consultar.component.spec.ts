import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoConsultarComponent } from './permiso-consultar.component';

describe('PermisoConsultarComponent', () => {
  let component: PermisoConsultarComponent;
  let fixture: ComponentFixture<PermisoConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoConsultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
