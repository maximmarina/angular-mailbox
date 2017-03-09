'use strict';
class MailDetailCtrl {
    constructor($state){
        console.log('Init mailDetail');
        this._$state = $state;
        this.emailId = this._$state.params.emailId;
    }

    $onInit(){
        console.log("Run $onInit for mailDetail!");
        this.email = null;
        for (var i = 0; i < this.emailsData.length; i++) {
            var item = this.emailsData[i];
            if(item.id == this.emailId){
                this.email = item;
                break;
            }
        }

        if(this.email === null){
            this._$state.go('gmail.inbox');
        }

        //this.setFlagReadEmail(this.emailId);
    }
}

MailDetailCtrl.$inject = ['$state'];

export const mailDetailComponent = {
    bindings: {
        emailsData: '<',
        deleteEmail: '&',
        setFlagReadEmail: '&'
    },
    templateUrl: "app/gmail/mailbox/detail/detail.html",
    controller: MailDetailCtrl
}