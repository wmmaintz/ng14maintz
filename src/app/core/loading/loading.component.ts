import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'm-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setLoading(onOrOff: boolean) {
    this.isLoading = onOrOff;
  }
  
}
