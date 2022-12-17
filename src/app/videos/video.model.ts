export class Video {
    id:         number;
    category:   string;
    name:       string;
    descript:   string;
    href:       string;
    img:        string;

    constructor() { 
        this.id = 0;
        this.category = 'Unknown';
        this.name = 'Unknown';
        this.descript = 'Unknown';
        this.href = '/assets/images/vid/unknown.png';
        this.img = 'Unknown';
    }
}
