import { TestBed } from '@angular/core/testing';

import { AngularInMemoryWebApiService } from './angular-in-memory-web-api.service';

describe('AngularInMemoryWebApiService', () => {
  let service: AngularInMemoryWebApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularInMemoryWebApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
