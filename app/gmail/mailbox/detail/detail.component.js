'use strict';
class mailDetailCtrl {
    constructor(){
        console.log('Init mailDetail');
    }

    $onInit(){
        console.log("Run $onInit for mailDetail!");
    }
}

export const mailDetailComponent = {
    bindings: {
        emailsData: '<',
        deleteEmail: '&'
    },
    templateUrl: "app/gmail/mailbox/detail/detail.html",
    controller: mailDetailCtrl
}