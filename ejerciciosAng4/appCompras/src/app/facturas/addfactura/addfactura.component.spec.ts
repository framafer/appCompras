import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacturaComponent } from './addfactura.component';

describe('AddfacturaComponent', () => {
  let component: AddfacturaComponent;
  let fixture: ComponentFixture<AddfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
