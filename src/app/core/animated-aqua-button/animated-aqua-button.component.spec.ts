import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedAquaButtonComponent } from './animated-aqua-button.component';

describe('AnimatedAquaButtonComponent', () => {
  let component: AnimatedAquaButtonComponent;
  let fixture: ComponentFixture<AnimatedAquaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedAquaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedAquaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
