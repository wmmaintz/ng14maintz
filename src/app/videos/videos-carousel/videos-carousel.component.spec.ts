import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCarouselComponent } from './videos-carousel.component';

describe('VideosCarouselComponent', () => {
  let component: VideosCarouselComponent;
  let fixture: ComponentFixture<VideosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
