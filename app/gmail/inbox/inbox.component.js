'use strict';
class inboxCtrl {
    constructor(){
        console.log('Init inboxCtrl');
    }
}

export const inboxComponent = {
    templateUrl: "app/gmail/inbox/inbox.html",
    controller: inboxCtrl
}