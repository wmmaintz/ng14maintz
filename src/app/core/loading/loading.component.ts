import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'm-loading',
  templateUrl: './loading.component.html',
  styleUrls: [
    './loading.component.scss',
    '../core.scss'
  ]
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false;
  spinnerColor: string = 'primary';
  spinnerSize: number = 80;
  mode: string = 'determinate';

  constructor() { }

  ngOnInit(): void {
  }

  setLoading(onOrOff: boolean) {
    this.isLoading = onOrOff;
  }
  
}
