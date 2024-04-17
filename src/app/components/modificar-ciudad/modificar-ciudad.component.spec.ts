import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCiudadComponent } from './modificar-ciudad.component';

describe('ModificarCiudadComponent', () => {
  let component: ModificarCiudadComponent;
  let fixture: ComponentFixture<ModificarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
