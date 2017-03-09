'use strict';
class gmailCtrl {
    constructor(){
        console.log('Init gmailCtrl');
    }
    
    $onInit(){
        console.log("Run $onInit for gmailCtrl!");
    }
    
    deleteEmail(item){
        this.emailsData.splice( this.emailsData.indexOf(item), 1);
    }

    deleteContact(){

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