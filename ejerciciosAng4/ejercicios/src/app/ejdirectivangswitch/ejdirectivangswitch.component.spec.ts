import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangswitchComponent } from './ejdirectivangswitch.component';

describe('EjdirectivangswitchComponent', () => {
  let component: EjdirectivangswitchComponent;
  let fixture: ComponentFixture<EjdirectivangswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjdirectivangswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjdirectivangswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
