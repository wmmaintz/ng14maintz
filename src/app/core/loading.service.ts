import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: boolean = false;
  percentLoaded: number = 0;

  constructor() { }

  showLoaderUntilCompleted() {}

}
