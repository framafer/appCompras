import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangclassComponent } from './ejdirectivangclass.component';

describe('EjdirectivangclassComponent', () => {
  let component: EjdirectivangclassComponent;
  let fixture: ComponentFixture<EjdirectivangclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjdirectivangclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjdirectivangclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
