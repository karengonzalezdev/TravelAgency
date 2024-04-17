import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroReservacionComponent } from './filtro-reservacion.component';

describe('FiltroReservacionComponent', () => {
  let component: FiltroReservacionComponent;
  let fixture: ComponentFixture<FiltroReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroReservacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
