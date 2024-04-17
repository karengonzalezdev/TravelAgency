import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCuartoComponent } from './registrar-cuarto.component';

describe('RegistrarCuartoComponent', () => {
  let component: RegistrarCuartoComponent;
  let fixture: ComponentFixture<RegistrarCuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCuartoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
