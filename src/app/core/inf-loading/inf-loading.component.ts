import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-inf-loading',
  templateUrl: './inf-loading.component.html',
  styleUrls: ['./inf-loading.component.scss']
})
export class InfLoadingComponent implements OnInit {
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setLoading(onOrOff: boolean) {
    this.isLoading = onOrOff;
  }
  
}
