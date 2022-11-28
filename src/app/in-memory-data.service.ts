import { InMemoryDbService } from 'angular-in-memory-web-api';
// Load Models
import { Link }  from '@app/links/link.model';
import { Photo } from '@app/photos/photo.model';
import { Video } from '@app/videos/video.model';
import { User }  from '@app/accounts/user.model';
import { State } from '@app/accounts/state.model';
// Load Data
import * as LINKS  from '@data/json/links.json';
import * as PHOTOS from '@data/json/photos.json';
import * as VIDEOS from '@data/json/videos.json';
import * as USERS  from '@data/json/users.json';
import * as STATES from '@data/json/states.json';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const links:  Link[]  = LINKS;
    const photos: Photo[] = PHOTOS;
    const videos: Video[] = VIDEOS;
    const users:  User[]  = USERS;
    const states: State[] = STATES;
  
    let tables: any[] = [ links, photos, videos, users, states ];
    
    const query = [
      { name: '@angular/core', version: '20.1.0', description: 'angular core package' },
      { name: '@angular/common', version: '20.1.0', description: 'angular common package' },
      { name: '@angular/material', version: '20.1.5', description: 'angular material package' },
    ];
    return {tables, query};
  }
}
