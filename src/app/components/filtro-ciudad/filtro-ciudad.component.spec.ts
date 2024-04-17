import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCiudadComponent } from './filtro-ciudad.component';

describe('FiltroCiudadComponent', () => {
  let component: FiltroCiudadComponent;
  let fixture: ComponentFixture<FiltroCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
