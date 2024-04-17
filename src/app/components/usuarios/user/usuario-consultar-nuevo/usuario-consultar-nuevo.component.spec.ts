import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioConsultarNuevoComponent } from './usuario-consultar-nuevo.component';

describe('UsuarioConsultarNuevoComponent', () => {
  let component: UsuarioConsultarNuevoComponent;
  let fixture: ComponentFixture<UsuarioConsultarNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioConsultarNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioConsultarNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
