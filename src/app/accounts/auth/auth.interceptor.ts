import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {
  HttpRequest,
  HttpEvent,
  HttpUserEvent,
  HttpInterceptor,
  HttpHandler } from '@angular/common/http';

import { Observable, pipe } from "rxjs";
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/do';

import { AccountsService } from '../accounts.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get('No-Auth') == "True")
      return next.handle(request.clone());

    if (localStorage.getItem('userToken') != null) {
      const clonedreq = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
      });
      return next.handle(clonedreq)
        .pipe( tap(
          succ => { },
          err => {
            if (err.status === 401)
              this.router.navigateByUrl('/login');
          }
        ));
    }
    else {
      this.router.navigateByUrl('/login');
      // Don't know if this is valid
      return next.handle(request);
    }
  }
}
