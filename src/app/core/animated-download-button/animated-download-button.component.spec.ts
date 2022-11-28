import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDownloadButtonComponent } from './animated-download-button.component';

describe('AnimatedDownloadButtonComponent', () => {
  let component: AnimatedDownloadButtonComponent;
  let fixture: ComponentFixture<AnimatedDownloadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedDownloadButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedDownloadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
