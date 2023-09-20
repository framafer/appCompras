import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfacturaComponent } from './editfactura.component';

describe('EditfacturaComponent', () => {
  let component: EditfacturaComponent;
  let fixture: ComponentFixture<EditfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
