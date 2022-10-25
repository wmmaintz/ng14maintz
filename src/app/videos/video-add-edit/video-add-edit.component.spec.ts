import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAddEditComponent } from './video-add-edit.component';

describe('VideoAddEditComponent', () => {
  let component: VideoAddEditComponent;
  let fixture: ComponentFixture<VideoAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
