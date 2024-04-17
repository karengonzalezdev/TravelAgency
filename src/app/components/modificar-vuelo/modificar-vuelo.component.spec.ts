import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVueloComponent } from './modificar-vuelo.component';

describe('ModificarVueloComponent', () => {
  let component: ModificarVueloComponent;
  let fixture: ComponentFixture<ModificarVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarVueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
