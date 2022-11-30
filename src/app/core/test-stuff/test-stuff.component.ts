import { Component, OnInit } from '@angular/core';

import { timeout, timer } from 'rxjs';
import * as moment from 'moment';

import { AnimatedButton } from '@app/core/animated-button.model';
import { AnimatedButtonComponent } from '@app/core/animated-button/animated-button.component';
import { AnimatedDeleteButtonComponent } from '../animated-delete-button/animated-delete-button.component';

@Component({
  selector: 'app-test-stuff',
  templateUrl: './test-stuff.component.html',
  styleUrls: ['./test-stuff.component.scss']
})
export class TestStuffComponent implements OnInit {
  contents: string = ' ';
  webpart:string = "this test stuff";

  // Animated button
  animBtn: AnimatedButton;
  delBtn: AnimatedButton;

  constructor(
    private animBtnComp: AnimatedButtonComponent
  ) {
    this.initBtn(this.animBtn);
    this.initBtn(this.delBtn);
    // this.delBtn.btnTextBeg = "Animated Delete Button";
   }

  ngOnInit(): void {
  }

  buttonPressed(btnName: string){
    this.contents += btnName + ', ';
  }

  clearContents(){
    this.contents = ' ';
  }
  
  initBtn(btn: AnimatedButton) {
    btn = this.animBtnComp.defineBtn('animBtn');
    btn.btnClassBeg = 'ready';
    btn.btnClassEnd = 'success';
    btn.btnClassCan = 'cancel';
    btn.iconNameBeg = "check_box_outline_blank";
    btn.iconNameEnd = "check_box";
    btn.iconNameCan = "cancel";
    btn.btnTextBeg = "Animated Button";
  }

  localMethod(btnName: string, btn: AnimatedButton){
    this.contents += btnName + ', ';
    this.dumpButtonProps(btn);
    console.log(`TestStuffComponent - Local Method Called from ${btnName}`);
    console.log('TestStuffComponent - Calling animBtnComp.btnClicked()');
    this.animBtnComp.btnClicked();
    console.log('TestStuffComponent - animBtnComp.btnClicked() Called');
    console.log('TestStuffComponent - Calling animBtnComp.btnReset()');
    this.animBtnComp.btnReset();
    console.log('TestStuffComponent - animBtnComp.btnReset() Called');
    alert('TestStuffComponent - Local Method Called');
  }

  dumpButtonProps(btn: AnimatedButton) {
    console.log(`      btnId = ${btn.btnId}`);
    console.log(`btnTextBeg  = ${btn.btnTextBeg}`);
    console.log(`btnTextHov  = ${btn.btnTextHov}`);
    console.log(`btnTextEnd  = ${btn.btnTextEnd}`);
    console.log(`btnTextCan  = ${btn.btnTextCan}`);
    console.log(`btnClassBeg = ${btn.btnClassBeg}`);
    console.log(`btnClassEnd = ${btn.btnClassEnd}`);
    console.log(`btnClassCan = ${btn.btnClassCan}`);
    console.log(`iconNameBeg = ${btn.iconNameBeg}`);
    console.log(`iconNameEnd = ${btn.iconNameEnd}`);
    console.log(`iconNameCan = ${btn.iconNameCan}`);
    console.log(`fgColorBeg  = ${btn.fgColorBeg}`);
    console.log(`fgColorEnd  = ${btn.fgColorEnd}`);
    console.log(`fgColorCan  = ${btn.fgColorCan}`);
    console.log(`bgColorBeg  = ${btn.bgColorBeg}`);
    console.log(`bgColorEnd  = ${btn.bgColorEnd}`);
    console.log(`bgColorCan  = ${btn.bgColorCan}`);
  }
   
}
