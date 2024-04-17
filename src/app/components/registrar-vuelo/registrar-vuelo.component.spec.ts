import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVueloComponent } from './registrar-vuelo.component';

describe('RegistrarVueloComponent', () => {
  let component: RegistrarVueloComponent;
  let fixture: ComponentFixture<RegistrarVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
