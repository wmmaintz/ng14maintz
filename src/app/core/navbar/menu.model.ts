export class MenuItem {
    menuGroup: string;
    name: string;
    matTooltip: string;
    matIcon: string;
    display: string;
    ariaLabel: string;
    ariaHidden: boolean;
    routerLink: string;
    subMenuGrp: string;

    constructor(){
        this.menuGroup = '';
        this.name = '';
        this.matTooltip = '';
        this.matIcon = '';
        this.display = '';
        this.ariaLabel = '';
        this.ariaHidden = true;
        this.routerLink = '';
        this.subMenuGrp = '';
    }
}