'use strict';
class authMenuCtrl {
    constructor(){
        console.log('Init menuCtrl');
    }
}

export const authMenuComponent = {
    templateUrl: "app/auth/menu/authMenu.html",
    controller: authMenuCtrl
}