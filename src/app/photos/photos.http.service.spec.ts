import { TestBed } from '@angular/core/testing';

import { PhotosHttpService } from './photos.http.service';

describe('PhotosHttpService', () => {
  let service: PhotosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
