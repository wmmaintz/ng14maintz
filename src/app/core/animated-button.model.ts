// Define the properties of the animated button for each of three states:
//  1) Beginning (Beg) state = 'ready'
//  2) Completed (End) state = 'success'
//  3) Cancelled (Can) state = 'cancel'

export interface AnimatedButton {
    btnId       : string;
    btnTextBeg  : string;
    btnTextHov  : string;
    btnTextEnd  : string;
    btnTextCan  : string;
    btnClassBeg : string;
    btnClassEnd : string;
    btnClassCan : string;
    iconNameBeg : string;
    iconNameEnd : string;
    iconNameCan : string;
    fgColorBeg  : string;
    fgColorEnd  : string;
    fgColorCan  : string;
    bgColorBeg  : string;
    bgColorEnd  : string;
    bgColorCan  : string;
}
