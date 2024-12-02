import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCommandComponent } from './success-command.component';

describe('SuccessCommandComponent', () => {
  let component: SuccessCommandComponent;
  let fixture: ComponentFixture<SuccessCommandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessCommandComponent]
    });
    fixture = TestBed.createComponent(SuccessCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
