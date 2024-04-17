import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadComponent } from './ciudad.component';

describe('CiudadComponent', () => {
  let component: CiudadComponent;
  let fixture: ComponentFixture<CiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
