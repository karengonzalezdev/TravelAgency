import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPaginadaComponent } from './tabla-paginada.component';

describe('TablaPaginadaComponent', () => {
  let component: TablaPaginadaComponent;
  let fixture: ComponentFixture<TablaPaginadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPaginadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPaginadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
