'use strict';
class contactCtrl {
    constructor(){
        console.log('Init contactCtrl');
    };
    $onInit(){
        console.log("Run $onInit for contactCtrl!");
        console.log(this.contactsData);
    };
}

export const contactComponent = {
    bindings: {
        contactsData: '<',
    },
    templateUrl: "app/gmail/contact/contact.html",
    controller: contactCtrl
}