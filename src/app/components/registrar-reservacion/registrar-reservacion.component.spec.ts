import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReservacionComponent } from './registrar-reservacion.component';

describe('RegistrarReservacionComponent', () => {
  let component: RegistrarReservacionComponent;
  let fixture: ComponentFixture<RegistrarReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarReservacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
