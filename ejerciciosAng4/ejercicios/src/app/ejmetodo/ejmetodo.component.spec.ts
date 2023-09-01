import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmetodoComponent } from './ejmetodo.component';

describe('EjmetodoComponent', () => {
  let component: EjmetodoComponent;
  let fixture: ComponentFixture<EjmetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmetodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
