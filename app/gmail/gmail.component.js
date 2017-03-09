'use strict';

class GmailCtrl {
    constructor($state){
        this._$state = $state;
        console.log('Init gmailCtrl');
        this.searchMailbox = {};
        this.searchMailbox.value = "";
    }
    
    $onInit(){
        console.log("Run $onInit for gmailCtrl!");
    }
    
    deleteEmail(item){
        this.emailsData.splice( this.emailsData.indexOf(item), 1);
        if(this._$state.current.name == "gmail.detail") {
            this._$state.go('gmail.inbox');
        }
    }

    deleteContact(item){
        this.contactsData.splice( this.contactsData.indexOf(item), 1);
    }

    selectEmail(email){
        console.log(email);
        let idEmail = email.id;
        this._$state.go('gmail.detail', {'emailId':idEmail});
    }

    setFlagReadEmail(email){        
        // ставим флаг unread = false;
    }
}

GmailCtrl.$inject = ['$state'];

export const gmailComponent = {
    bindings: {
        emailsData: '<',
        contactsData: '<'
    },
    templateUrl: "app/gmail/gmail.html",
    controller: GmailCtrl
}