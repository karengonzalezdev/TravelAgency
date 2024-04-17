import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAerolineaComponent } from './modificar-aerolinea.component';

describe('ModificarAerolineaComponent', () => {
  let component: ModificarAerolineaComponent;
  let fixture: ComponentFixture<ModificarAerolineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAerolineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarAerolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
