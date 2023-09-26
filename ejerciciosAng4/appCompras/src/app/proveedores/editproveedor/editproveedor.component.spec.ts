import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproveedorComponent } from './editproveedor.component';

describe('EditproveedorComponent', () => {
  let component: EditproveedorComponent;
  let fixture: ComponentFixture<EditproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
