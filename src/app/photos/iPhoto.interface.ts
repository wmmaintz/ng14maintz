export interface IPhoto {
    id        : number,
    name      : string,
    href      : string,
    thumbnail : string,
    hoffset   : number,
    voffset   : number,
    dateTaken : string,
    size      : number,
    tags      : string[],
    hilight   : number
}