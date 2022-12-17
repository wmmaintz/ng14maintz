import { Component } from '@angular/core';

import { UtilsService } from './core/utils.service';

@Component({
  selector: 'm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng14maintz';

  constructor(
    private utils: UtilsService
  ) { }

}
