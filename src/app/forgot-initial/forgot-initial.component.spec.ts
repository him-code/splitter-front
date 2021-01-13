import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotInitialComponent } from './forgot-initial.component';

describe('ForgotInitialComponent', () => {
  let component: ForgotInitialComponent;
  let fixture: ComponentFixture<ForgotInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
