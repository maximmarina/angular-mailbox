'use strict';
// loginCtrl.$inject = ['ui.router', 'ngResource', 'ngCookies'];
class loginCtrl {
    constructor(){
        console.log('Init loginCtrl');
    }


    login(){
        console.log('login');
    }
}

export const loginComponent = {
    templateUrl: "app/auth/login/login.html",
    controller: loginCtrl
}