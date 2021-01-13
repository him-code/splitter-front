import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotFinalComponent } from './forgot-final.component';

describe('ForgotFinalComponent', () => {
  let component: ForgotFinalComponent;
  let fixture: ComponentFixture<ForgotFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
