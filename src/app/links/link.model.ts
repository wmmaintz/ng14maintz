export class Link {
    id:         number;
    type:       string;
    category:   string;
    name:       string;
    href:       string;
    target:     string;
    descript:   string;

    constructor() {
        this.id         = 0;
        this.type       = 'Unknown';
        this.category   = 'Unknown';
        this.name       = 'Unknown';
        this.href       = 'Unknown';
        this.target     = 'Unknown';
        this.descript   = 'Unknown';
    }
}
