import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproveeComponent } from './addprovee.component';

describe('AddproveeComponent', () => {
  let component: AddproveeComponent;
  let fixture: ComponentFixture<AddproveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
