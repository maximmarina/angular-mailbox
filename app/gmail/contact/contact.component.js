'use strict';
class contactCtrl {
    constructor(){
        console.log('Init contactCtrl');
    };
    $onInit(){
        console.log("Run $onInit for contactCtrl!");
    };
}

export const contactComponent = {
    bindings: {
        contactsData: '<',
        searchMailbox: '<',
        deleteContact: '&'
    },
    templateUrl: "app/gmail/contact/contact.html",
    controller: contactCtrl
}