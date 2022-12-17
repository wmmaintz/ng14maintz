export class CalDay {
    display: string;        // Day of the month (zero if blank)
    hiLite: boolean;    // Highlight this day?

    constructor(display: string, hiLite:boolean = false) {
        this.display = display;
        this.hiLite = hiLite;
    }
}
