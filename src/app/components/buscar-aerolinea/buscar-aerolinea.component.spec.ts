import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAerolineaComponent } from './buscar-aerolinea.component';

describe('BuscarAerolineaComponent', () => {
  let component: BuscarAerolineaComponent;
  let fixture: ComponentFixture<BuscarAerolineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAerolineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAerolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
