'use strict';

import {loginComponent}         from './auth/login/login.component';
import {registrateComponent}    from './auth/registrate/registrate.component';
import {authMenuComponent}      from './auth/menu/authMenu';

import {gmailComponent}         from './gmail/gmail.component';
import {inboxComponent}         from './gmail/inbox/inbox.component';
import {sideBarComponent}         from './gmail/sidebar/sidebar.component';

let app = angular.module('mailBox', ['ui.router', 'ngResource', 'ngCookies']);

app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state({
        name: 'login',
        url: '/login',
        template: '<login></login>',
    }).state({
        name: 'registrate',
        url: '/registrate',
        template: '<registrate></registrate>',
    }).state({
        name: 'gmail',
        abstract: true,
        template: '<gmail></gmail>',
        url: '/mail',
        // resolve: {
        //     mailData: function () {
        //         return [{"id":0}];
        //     },
        //     contactData: function () {
        //         return [{"id":0}];
        //     }
        // },
        // controller: function($scope, $stateParams) {
        //     $scope.mailData = mailData;
        //     $scope.contactData = contactData;
        // }
    }).state({
        name: 'gmail.inbox',
        url: '/inbox',
        template: '<inbox></inbox>'
    })



    $urlRouterProvider.otherwise('/login');
});

app.component('login', loginComponent);
app.component('registrate', registrateComponent);
app.component('authMenu', authMenuComponent);

app.component('gmail', gmailComponent);
app.component('inbox', inboxComponent);
app.component('sidebar', sideBarComponent);



//
// app.component('mail', {
//     template: 'ma',
//     controller: function() {
//         console.log('mail');
//     }
// });
//
// app.component('inbox', {
//     template: 'inbox',
//     controller: function() {
//         console.log('inbox');
//     }
// });