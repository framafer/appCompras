import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmidirectivaComponent } from './ejmidirectiva.component';

describe('EjmidirectivaComponent', () => {
  let component: EjmidirectivaComponent;
  let fixture: ComponentFixture<EjmidirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmidirectivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmidirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
