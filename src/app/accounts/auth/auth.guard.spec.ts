import { TestBed } from '@angular/core/testing';

import { Auth } from './auth.guard';
import { AuthGuard } from './auth.guard';

describe('Auth', () => {
  it('should create an instance of Auth', () => {
    expect(new Auth()).toBeTruthy();
  });
});

describe('Auth.guard', ()=> {
  let auth: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    auth = TestBed.inject(Auth);
  });

});

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
