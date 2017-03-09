'use strict';
class inboxCtrl {
    constructor(){
        console.log('Init inboxCtrl');
    };
    $onInit(){
        console.log("Run $onInit for InboxCtrl!");
        console.log(this.emailsData);
        console.log(this.contactsData);
        console.log(this.typeEmail);
    };
}

export const inboxComponent = {
    bindings: {
        emailsData: '<',
        contactsData: '<',
        typeEmail: '<'
    },
    templateUrl: "app/gmail/inbox/inbox.html",
    controller: inboxCtrl
}