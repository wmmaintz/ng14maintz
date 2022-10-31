import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../../core/loading/loading.component';

@Component({
  selector: 'm-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: [
    './videos-list.component.scss',
    '../videos.scss'
  ]
})
export class VideosListComponent implements OnInit {
  isLoading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
