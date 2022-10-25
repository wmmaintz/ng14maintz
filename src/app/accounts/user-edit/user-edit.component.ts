import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormBuilder } from '@angular/forms';
import { FormGroup, NgModel } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { User } from '../user.model';
import { AccountsService } from '../accounts.service';
import { SharedModule } from "../../shared.module";
import { UnderConstructionComponent } from 'src/app/core/under-construction/under-construction.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: [
    './user-edit.component.scss',
    '../accounts.scss'
  ]
})
export class UserEditComponent implements OnInit {
  title: string = 'Edit User Account';
  // @ViewChild('f') form: any;
  // @ViewChild("f", { static: NgForm });
  // ngModel: any;
  // f: NgForm = new NgForm(f,Validators.required);
  // nameGrp = FormGroup;
  // user: User = new User();
  // salutation: string = '';
  // first: string = '';
  // mi: string = '';
  // last: string = '';
  // suffix: string = '';
  // email: string = '';
  // username: string = '';
  // password: string = '';
  // confirmPassword: string = '';
  // phone: string = '';
  // role: string = '';


  // userEditForm: NgForm = new NgForm(validators: Validators, asyncValidator: AsyncValidator);
  // @ViewChild('editForm', { static: true }) editForm: NgForm;
  // @ViewChild("#userEditForm", { (static: NgForm) });
  // @ViewChild("#f", { static: NgForm });

  constructor(
    private fb: FormBuilder,
    private accountsService: AccountsService
  ) {
    // this.createForm();
   }

  ngOnInit(): void {
    // this.f = new FormGroup({
      // salutation: new FormControl(this.salutation, [
        // Validators.maxLength(4)
      // ]),

    // })
    // this.salutation       = new FormControl();
    // this.first            = new FormControl('f',Validators.required);
    // this.mi               = new FormControl('',Validators.max(1));
    // this.last             = new FormControl('',Validators.required);
    // this.suffix           = new FormControl();
    // this.email            = new FormControl('',Validators.required);
    // this.password         = new FormControl('',Validators.required);
    // this.confirmPassword  = new FormControl('',Validators.required);
    // this.phone            = new FormControl('',[
    //   Validators.pattern('[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'),
    //   Validators.minLength(10) ]);
  }

  createForm() {
    // this.nameGrp = this.fb.group({
    //   name: ['', Validators.required ]
    // });
    // this.user = new User();
    // this.user.salutation = this.salutation.value;
    // this.user.first = this.first.value;
    // this.user.mi = this.mi.value;
    // this.user.last = this.last.value;
    // this.user.suffix = this.suffix.value;
    // this.user.email = this.email.value;
    // this.user.username = this.username.value;
    // this.user.password = this.password.value;
    // this.user.confirmPassword = this.confirmPassword.value;
    // this.user.phone = this.phone.value;
    // this.user.role = this.role.value;
    // this.user.role = this.user.role;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  
}
