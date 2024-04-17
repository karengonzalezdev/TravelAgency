import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartosPorIdHotelComponent } from './cuartos-por-id-hotel.component';

describe('CuartosPorIdHotelComponent', () => {
  let component: CuartosPorIdHotelComponent;
  let fixture: ComponentFixture<CuartosPorIdHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartosPorIdHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartosPorIdHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
