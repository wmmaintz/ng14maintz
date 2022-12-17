import { Component, OnInit } from '@angular/core';

import { timeout, timer } from 'rxjs';
import * as moment from 'moment';

import { AnimatedButton } from '@app/core/animated-button.model';
import { AnimatedButtonComponent } from '@app/core/animated-button/animated-button.component';
import { AnimatedDeleteButtonComponent } from '../animated-delete-button/animated-delete-button.component';
import { UtilsService } from '@app/core/utils.service';


@Component({
  selector: 'app-test-stuff',
  templateUrl: './test-stuff.component.html',
  styleUrls: ['./test-stuff.component.scss']
})
export class TestStuffComponent implements OnInit {
  contents: string = ' ';
  webpart:string = "test stuff";

  // Animated button
  animBtn: AnimatedButton;
  delBtn: AnimatedButton;

  constructor(
    private animBtnComp: AnimatedButtonComponent,
    private utils: UtilsService
  ) {
    this.initBtn(this.animBtn);
    this.initBtn(this.delBtn);
    // this.delBtn.btnTextBeg = "Animated Delete Button";
   }

  ngOnInit(): void {
  }

  acknowledgeButtonPress(btnName) {
    alert(`The ${btnName} was just pressed.`)
  }

  buttonPressed(btnName: string){
    this.contents += btnName + ', ';
    this.acknowledgeButtonPress(btnName);
  }

  clearContents(){
    this.contents = ' ';
    this.acknowledgeButtonPress('Clear Contents Button');
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
    this.utils.log(`TestStuffComponent - Local Method Called from ${btnName}`);
    this.utils.log('TestStuffComponent - Calling animBtnComp.btnClicked()');
    this.animBtnComp.btnClicked();
    this.utils.log('TestStuffComponent - animBtnComp.btnClicked() Called');
    this.utils.log('TestStuffComponent - Calling animBtnComp.btnReset()');
    this.animBtnComp.btnReset();
    this.utils.log('TestStuffComponent - animBtnComp.btnReset() Called');
    alert('TestStuffComponent - Local Method Called');
  }

  dumpButtonProps(btn: AnimatedButton) {
    this.utils.log(`      btnId = ${btn.btnId}`);
    this.utils.log(`btnTextBeg  = ${btn.btnTextBeg}`);
    this.utils.log(`btnTextHov  = ${btn.btnTextHov}`);
    this.utils.log(`btnTextEnd  = ${btn.btnTextEnd}`);
    this.utils.log(`btnTextCan  = ${btn.btnTextCan}`);
    this.utils.log(`btnClassBeg = ${btn.btnClassBeg}`);
    this.utils.log(`btnClassEnd = ${btn.btnClassEnd}`);
    this.utils.log(`btnClassCan = ${btn.btnClassCan}`);
    this.utils.log(`iconNameBeg = ${btn.iconNameBeg}`);
    this.utils.log(`iconNameEnd = ${btn.iconNameEnd}`);
    this.utils.log(`iconNameCan = ${btn.iconNameCan}`);
    this.utils.log(`fgColorBeg  = ${btn.fgColorBeg}`);
    this.utils.log(`fgColorEnd  = ${btn.fgColorEnd}`);
    this.utils.log(`fgColorCan  = ${btn.fgColorCan}`);
    this.utils.log(`bgColorBeg  = ${btn.bgColorBeg}`);
    this.utils.log(`bgColorEnd  = ${btn.bgColorEnd}`);
    this.utils.log(`bgColorCan  = ${btn.bgColorCan}`);
  }
   
}
