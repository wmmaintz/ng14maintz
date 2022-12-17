import { Injectable } from '@angular/core';
import { HttpClient,
         HttpResponse,
         HttpErrorResponse,
         HttpParams,
         HttpHeaders } from '@angular/common/http';
import { Observable, interval, throwError } from "rxjs";
import { catchError, retry, shareReplay, map } from 'rxjs/operators';


import { Config } from '@app/config/config.model';
import { ConfigService } from '@app/config/config.service';
import { Link } from './link.model';
import { ILink } from './iLink.interface';
import { UtilsService } from '@app/core/utils.service';

@Injectable()
export class LinksService {
  private url = 'assets/data/json/links.json';
  link: Link;
  links: Link[] = [];
  config: Config;
  configError: string = '';

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private utils: UtilsService
  ) {
    this.getLinks()
      .subscribe(data => this.links = data);
  }

  getLinks(): Observable<ILink[]> {
    return this.httpClient.get<ILink[]>(this.url);
  }

  getLink(id: number): ILink {
    this.utils.log(`LinksService.getLink(id: ${id}) of ${this.links.length}`);
    for (let i = 0; i<this.links.length; i++) {
      this.utils.log(`LinksService.getLink - Comparing [${i}] with [${id}]`);
      if (this.links[i].id === id) {
        this.link = this.links[i];
        break;
      }
    }
    return this.link;
  }

// loadInitialData() {
//     this.linksBackendService.getAllLinks()
//         .subscribe(
//             res => {
//                 let links = (<Object[]>res.json()).map((link: any) =>
//                     new Link({id: link.id, type: link.type, category: link.category, name: link.name, href: link.href, target: link.target, descript: link.descript}));
//                 this._links.next(List(links));
//             },
//             err => console.log("Error retrieving Links")
//         );
// 
// }
// 
// addLink(newLink:Link):Observable {
// 
//     let obs = this.linkBackendService.saveLink(newLink);
// 
//     obs.subscribe(
//             res => {
//                 this._links.next(this._links.getValue().push(newLink));
//             });
// 
//     return obs;
// }
// 
// toggleLink(toggled:Link): Observable {
//     let obs: Observable = this.linkBackendService.toggleLink(toggled);
// 
//     obs.subscribe(
//         res => {
//             let links = this._links.getValue();
//             let index = links.findIndex((link: Link) => link.id === toggled.id);
//             let link:Link = links.get(index);
//             this._links.next(links.set(index, new Link({id:toggled.id, description:toggled.description, completed:!toggled.completed}) ));
//         }
//     );
// 
//     return obs;
// }
// 
// 
// deleteLink(deleted:Link): Observable {
//     let obs: Observable = this.linkBackendService.deleteLink(deleted);
// 
//     obs.subscribe(
//             res => {
//                 let links: List<Link> = this._links.getValue();
//                 let index = links.findIndex((link) => link.id === deleted.id);
//                 this._links.next(links.delete(index));
// 
//             }
//         );
// 
//     return obs;
// }


}

