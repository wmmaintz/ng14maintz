import { Component, OnInit } from '@angular/core';
import { Link } from '../link.model';
import * as LINKS from '../../data/json/links.json';
@Component({
  selector: 'm-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: [
    './links-list.component.scss',
    '../links.scss'
  ]
})
export class LinksListComponent implements OnInit {
  heading: string = 'Links List';
  subHeading: string = 'A list of hyperlinks to other Maintz\'s.';
  isLoading:boolean = true;
  links: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.links = LINKS;
  }

}
