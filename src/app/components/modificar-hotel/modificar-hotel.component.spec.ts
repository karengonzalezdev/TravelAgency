import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarHotelComponent } from './modificar-hotel.component';

describe('ActualizarHotelComponent', () => {
  let component: ActualizarHotelComponent;
  let fixture: ComponentFixture<ActualizarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
