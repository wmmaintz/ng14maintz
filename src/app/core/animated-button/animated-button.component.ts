import { Component, OnInit, Input} from '@angular/core';
import { Injectable } from '@angular/core';

import { AnimatedButton } from '../animated-button.model';
import { UtilsService } from '@app/core/utils.service';


/// https://webdeasy.de/en/top-css-buttons-en/?referer=dev-updated-f41
/// #12

@Component({
  selector: 'm-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AnimatedButtonComponent implements OnInit {
@Input() btn: AnimatedButton = this.defineBtn();
btnClass: string = '';

  constructor(
    private utils: UtilsService
  ) {
    this.utils.log(`this.btn.btnTextBeg = [${this.btn.btnTextBeg}]`)
    if(this.btn === undefined){ this.defineBtn(); }
    this.utils.log(`btnTextBeg = [${this.btn.btnTextBeg}]`)
    this.utils.log(`btnId = [${this.btn.btnId}]`)
    this.btnClass = this.btn.btnClassBeg;
  }

  ngOnInit(): void {
    this.initBtn();
  }

  btnClicked(){
    this.btnClass = this.btn.btnClassEnd;
  }

  btnCancelled() {
    this.btnClass=this.btn.btnClassCan;
  }

  btnReset() {
    this.btnClass = this.btn.btnClassBeg;
  }

  initBtn(){
    const btn = document.getElementById(this.btn.btnId);
    if (btn != null) {
      btn.style.backgroundColor = this.btn.bgColorBeg;
      btn.style.color = this.btn.fgColorBeg;
      btn.style.cssText = this.btn.btnTextBeg;
      btn.style.width = '100px';
      btn.style.height = '100px';
    }
  }

  defineBtn( btnIdStr: string = 'btn1' ): AnimatedButton { 
    return {
      btnId      : btnIdStr,
      btnTextBeg : 'Animated Button Text',
      btnTextHov : 'Hovering',
      btnTextEnd : 'Completed',
      btnTextCan : 'Cancelled',
      btnClassBeg: 'ready',
      btnClassEnd: 'success',
      btnClassCan: 'cancel',
      iconNameBeg: 'checkbox',
      iconNameEnd: 'check',
      iconNameCan: 'cancel',
      fgColorBeg:  'white',
      fgColorEnd:  'white',
      fgColorCan:  'yellow',
      bgColorBeg:  'red',
      bgColorEnd:  'green',
      bgColorCan:  'black'
    }
  }

}
