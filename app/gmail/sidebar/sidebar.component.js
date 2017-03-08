'use strict';
class sideBarCtrl {
    constructor(){
        console.log('Init sideBarCtrl');
    }
}

export const sideBarComponent = {
    templateUrl: "app/gmail/sidebar/sidebar.html",
    controller: sideBarCtrl
}