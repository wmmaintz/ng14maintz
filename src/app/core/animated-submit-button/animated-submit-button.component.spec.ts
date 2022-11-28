import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSubmitButtonComponent } from './animated-submit-button.component';

describe('AnimatedSubmitButtonComponent', () => {
  let component: AnimatedSubmitButtonComponent;
  let fixture: ComponentFixture<AnimatedSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedSubmitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
