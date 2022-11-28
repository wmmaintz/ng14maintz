import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMoreButtonComponent } from './animated-more-button.component';

describe('AnimatedMoreButtonComponent', () => {
  let component: AnimatedMoreButtonComponent;
  let fixture: ComponentFixture<AnimatedMoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedMoreButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
