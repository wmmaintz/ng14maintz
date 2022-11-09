import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Router } from "@angular/router";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from '../user.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'm-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../accounts.scss'
  ]
})
export class LoginComponent implements OnInit {
  heading: string = 'LOGIN';
  subHeading: string = 'Provide your email address and password to fully access this website.';
  isLoggedIn: boolean = false;
  user: User = new User();
  
  loginFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  constructor(
    private accountsService: AccountsService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.accountsService.isloggedIn(this.user)){
      this.isLoggedIn = true;
      this.router.navigate(['/']);  
    }
  }

  login(userEmail: string, pwd: string) {
    let newUser = new User();
    newUser.email = userEmail;
    newUser.password = pwd;
    this.user = this.accountsService.login(newUser);
    if(this.user !== null) {
      this.isLoggedIn = true;
    }
  }
}
