import { TestBed } from '@angular/core/testing';

import { Auth, AuthGuard } from './auth.guard';

describe('Auth', () => {
  it('should create an instance of Auth', () => {
    expect(new Auth()).toBeTruthy();
  });
});

describe('Auth.guard', ()=> {
  let auth: Auth;

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
