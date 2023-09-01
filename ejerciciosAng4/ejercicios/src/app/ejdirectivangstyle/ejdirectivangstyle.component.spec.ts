import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangstyleComponent } from './ejdirectivangstyle.component';

describe('EjdirectivangstyleComponent', () => {
  let component: EjdirectivangstyleComponent;
  let fixture: ComponentFixture<EjdirectivangstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjdirectivangstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjdirectivangstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
