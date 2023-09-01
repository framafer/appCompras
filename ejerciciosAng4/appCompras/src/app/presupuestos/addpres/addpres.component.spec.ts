import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpresComponent } from './addpres.component';

describe('AddpresComponent', () => {
  let component: AddpresComponent;
  let fixture: ComponentFixture<AddpresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
