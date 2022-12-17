import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Video } from '../video.model';
import { VideosService } from '../videos.service';
import { UtilsService } from '@app/core/utils.service';


@Component({
  selector: 'm-video-add-edit',
  templateUrl: './video-add-edit.component.html',
  styleUrls: [
    '../videos.scss',
    './video-add-edit.component.scss'
  ]
})
export class VideoAddEditComponent {
  @Input() videoId: number = 6;
  heading: string = 'Video Add/Edit';
  subHeading: string = 'A collection of interesting videos.';
  isLoading:boolean = true;
  video: Video = null;

  videoForm = this.fb.group({
    id: [null, Validators.required],
    category: [null, Validators.required],
    name: [null, Validators.required],
    descript: null,
    href: [null, Validators.required],
    img: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private videosService: VideosService,
    private utils: UtilsService
  ) {
    this.utils.log(`Video-add-edit: Attemtpting to retrieve Video [${this.videoId}] from VideosService}]`)
    this.video = this.videosService.getVideo(this.videoId);
    this.utils.log(`Video [${this.video.name}] loaded}]`)
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
