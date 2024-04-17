import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCuartoComponent } from './modificar-cuarto.component';

describe('ActualizarCuartoComponent', () => {
  let component: ActualizarCuartoComponent;
  let fixture: ComponentFixture<ActualizarCuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCuartoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
