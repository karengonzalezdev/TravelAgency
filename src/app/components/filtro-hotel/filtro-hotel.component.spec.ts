import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroHotelComponent } from './filtro-hotel.component';

describe('FiltroHotelComponent', () => {
  let component: FiltroHotelComponent;
  let fixture: ComponentFixture<FiltroHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
