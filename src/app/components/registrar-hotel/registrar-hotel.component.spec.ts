import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHotelComponent } from './registrar-hotel.component';

describe('RegistrarHotelComponent', () => {
  let component: RegistrarHotelComponent;
  let fixture: ComponentFixture<RegistrarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
