export class Config {
    menusUrl : string;
    linksUrl : string;
    photosUrl: string;
    statesUrl: string;
    usersUrl : string;
    videosUrl: string;
    logfile  : string;
    date     : any;

    constructor() {
    this.menusUrl = '';
    this.linksUrl = '';
    this.photosUrl = '';
    this.statesUrl = '';
    this.usersUrl = '';
    this.videosUrl = '';
    this.logfile = '';
    this.date = new Date();
    }
  }