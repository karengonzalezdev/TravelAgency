import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAerolineaComponent } from './registrar-aerolinea.component';

describe('RegistrarAerolineaComponent', () => {
  let component: RegistrarAerolineaComponent;
  let fixture: ComponentFixture<RegistrarAerolineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAerolineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAerolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
