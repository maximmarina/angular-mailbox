'use strict';
class gmailCtrl {
    constructor(){
        console.log('Init gmailCtrl');
        this.searchMailbox = {};
        this.searchMailbox.value = "";
    }
    
    $onInit(){
        console.log("Run $onInit for gmailCtrl!");
    }
    
    deleteEmail(item){
        this.emailsData.splice( this.emailsData.indexOf(item), 1);
    }

    deleteContact(item){
        this.contactsData.splice( this.contactsData.indexOf(item), 1);
    }
}

export const gmailComponent = {
    bindings: {
        emailsData: '<',
        contactsData: '<',
    },
    templateUrl: "app/gmail/gmail.html",
    controller: gmailCtrl
}