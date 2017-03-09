'use strict';
class mailboxCtrl {
    constructor(){
        console.log('Init mailboxxCtrl');
    }

    $onInit(){
        console.log("Run $onInit for mailboxCtrl!");
    }
}

export const mailboxComponent = {
    bindings: {
        emailsData: '<',
        contactsData: '<',
        typeEmail: '<',
        deleteEmail: '&'
    },
    templateUrl: "app/gmail/mailbox/mailbox.html",
    controller: mailboxCtrl
}