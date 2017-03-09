'use strict';
//gmailCtrl.$inject = ['$state'];
class gmailCtrl {
    constructor(){
        console.log('Init gmailCtrl');
        this.searchMailbox = {};
        this.searchMailbox.value = "";
    }
    
    $onInit(){
        console.log("Run $onInit for gmailCtrl!");
    }

    $onChanges(){
        console.log('gmailCtrl: $onChanges');
    }
    
    deleteEmail(item){
        this.emailsData.splice( this.emailsData.indexOf(item), 1);
    }

    deleteContact(item){
        this.contactsData.splice( this.contactsData.indexOf(item), 1);
    }

    selectEmail(email){
        console.log('selectEmail');
        console.log(email);
        let idEmail = email.id;
        // $state.go('gmail.detail', {'emailId':idEmail});
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