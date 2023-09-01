import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangifComponent } from './ejdirectivangif.component';

describe('EjdirectivangifComponent', () => {
  let component: EjdirectivangifComponent;
  let fixture: ComponentFixture<EjdirectivangifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjdirectivangifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjdirectivangifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
