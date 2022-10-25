import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, Validator } from '@angular/forms';
import { FormControl } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../user.model';
import { AccountsService } from '../accounts.service';
// import { ToastrService } from '@node/ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../accounts.scss'
  ]
})
export class RegisterComponent implements OnInit {
//  ngForm: NgForm = new NgForm(Validator,2);
  user: User = new User();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$';
  
  constructor(private accountsService: AccountsService,
    // private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(f?: NgForm) {
    if ((f !== null) && (f !== undefined)) {
      f.reset();
      if (f !== null) {
        this.user = {
          UserId: 0,
          Password: '',
          Email: '',
          Phone: '',
          FirstName: '',
          MI: '',
          LastName: '',
          Suffix: '',
          Role: ''
        };
      }
    }
  }

  /*
  OnSubmit(f: NgForm) {
    this.accountsService.registerUser()
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(f);
          //this.toastr.success('User registration successful');
        }
        else
          //this.toastr.error(data.Errors[0]);
      });
  }
  */

}

