'use strict';
class gmailCtrl {
    constructor(){
        console.log('Init gmailCtrl');
    }
    $onInit(){
        console.log("Run $onInit for gmailCtrl!");
    };
}

export const gmailComponent = {
    bindings: {
        emailsData: '<',
        contactsData: '<',
    },
    templateUrl: "app/gmail/gmail.html",
    controller: gmailCtrl
}