'use strict';
class sideBarCtrl {
    constructor(){
        console.log('Init sideBarCtrl');
    }

    $onInit(){
        console.log('Run $onInit for sideBarCtrl!');
    }

    $onChanges(){
        console.log('Run $onChanges for sideBarCtrl!');
    }
}

export const sideBarComponent = {
    templateUrl: "app/gmail/sidebar/sidebar.html",
    controller: sideBarCtrl,
    bindings: {
        emailsData: '<'
    }
}