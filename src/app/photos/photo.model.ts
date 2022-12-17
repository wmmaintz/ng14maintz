export class Photo {
    id        : number  ;
    name      : string  ;
    href      : string  ;
    thumbnail : string  ;
    hoffset   : number  ;
    voffset   : number  ;
    dateTaken : string  ;
    size      : number  ;
    tags      : string[];
    hilight   : number  ;

    
    constructor() { 
        this.id = 0;
        this.name = 'Unknown';
        this.href = '/assets/images/vid/unknown.png';
        this.thumbnail = '/assets/images/vid/Thumbnails/TN-unknown.png';
        this.hoffset = 0;
        this.voffset = 0;
        this.dateTaken = new Date().toLocaleDateString();
        this.size = 0;
        this.tags = [];
        this.hilight = 0;
    }
}
