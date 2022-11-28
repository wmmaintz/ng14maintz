import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDeleteButtonComponent } from './animated-delete-button.component';

describe('AnimatedDeleteButtonComponent', () => {
  let component: AnimatedDeleteButtonComponent;
  let fixture: ComponentFixture<AnimatedDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedDeleteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
