import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosListComponent } from './videos-list.component';

describe('VideoListComponent', () => {
  let component: VideosListComponent;
  let fixture: ComponentFixture<VideosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
