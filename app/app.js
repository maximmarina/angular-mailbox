'use strict';

import {loginComponent}         from './auth/login/login.component';
import {registrateComponent}    from './auth/registrate/registrate.component';
import {authMenuComponent}      from './auth/menu/authMenu';

import {gmailComponent}         from './gmail/gmail.component';
import {sideBarComponent}       from './gmail/sidebar/sidebar.component';
import {mailboxComponent}       from './gmail/mailbox/mailbox.component';
import {mailDetailComponent}    from './gmail/mailbox/detail/detail.component';
import {contactComponent}       from './gmail/contact/contact.component';

//Закоментировал, т.к. через експорт не получилось сделать.
// import {EmailService}           from './gmail/gmail.mail.service';

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
        template: '<gmail emails-data="emailsData" contacts-data="contactsData"></gmail>',
        url: '/mail',
        resolve: {
            emailsData: function (EmailService) {
                return EmailService.getAll().then((data) => {
                    return data.data;
                });
            },
            contactsData: function (ContactService) {
                return ContactService.getAll().then((data) => {
                    return data.data;
                });
            }
        },
        controller: function($scope, $stateParams, emailsData, contactsData) {
            $scope.emailsData = emailsData;
            $scope.contactsData = contactsData;
        }
    }).state({
        name: 'gmail.contact',
        url: '/contact',
        template: `<contact contacts-data="$ctrl.contactsData"
                            delete-contact="$ctrl.deleteContact(item)"
                            search-mailbox="$ctrl.searchMailbox">                   
                   </contact>`,
    }).state({
        name: 'gmail.inbox',
        url: '/inbox',
        template: `<mailbox emails-data="$ctrl.emailsData" 
                            contacts-data="$ctrl.contactsData" 
                            type-email="typeEmail"
                            delete-email="$ctrl.deleteEmail(item)"
                            select-email="$ctrl.selectEmail(item)"
                            search-mailbox="$ctrl.searchMailbox">
                   </mailbox>`,
        controller: function($scope) {
            $scope.typeEmail = 'inbox';
        }
    }).state({
        name: 'gmail.sent',
        url: '/sent',
        template: `<mailbox emails-data="$ctrl.emailsData" 
                            contacts-data="$ctrl.contactsData" 
                            type-email="typeEmail"
                            delete-email="$ctrl.deleteEmail(item)"                            
                            select-email="$ctrl.selectEmail(item)"
                            search-mailbox="$ctrl.searchMailbox">                            
                   </mailbox>`,
        controller: function($scope) {
            $scope.typeEmail = 'sent';
        }
    }).state({
        name: 'gmail.draft',
        url: '/draft',
        template: `<mailbox emails-data="$ctrl.emailsData" 
                            contacts-data="$ctrl.contactsData" 
                            type-email="typeEmail"
                            delete-email="$ctrl.deleteEmail(item)"
                            select-email="$ctrl.selectEmail(item)"
                            search-mailbox="$ctrl.searchMailbox">                            
                   </mailbox>`,
        controller: function($scope) {
            $scope.typeEmail = 'draft';
        }
    }).state({
        name: 'gmail.spam',
        url: '/spam',
        template: `<mailbox emails-data="$ctrl.emailsData" 
                            contacts-data="$ctrl.contactsData" 
                            type-email="typeEmail"
                            delete-email="$ctrl.deleteEmail(item)"
                            select-email="$ctrl.selectEmail(item)"
                            search-mailbox="$ctrl.searchMailbox">                            
                   </mailbox>`,
        controller: function($scope) {
            $scope.typeEmail = 'spam';
        }
    }).state({
        name: 'gmail.detail',
        url: '/:emailId',
        template: `<email-detail emails-data="$ctrl.emailsData"
                                 contacts-data="$ctrl.contactsData"
                                 delete-email="$ctrl.deleteEmail(item)">
                   </email-detail>`
    })

    $urlRouterProvider.otherwise('/login');
});

app.component('login', loginComponent);
app.component('registrate', registrateComponent);
app.component('authMenu', authMenuComponent);

app.component('gmail', gmailComponent);
app.component('sidebar', sideBarComponent);
app.component('mailbox', mailboxComponent);
app.component('emailDetail', mailDetailComponent);
app.component('contact', contactComponent);

//Закоментировал, т.к. через експорт не получилось сделать.
//app.service('EmailService', EmailService);

app.service('EmailService', function ($http) {
    this.getAll = () => {
        return $http.get('./data/emails.json');
    }
});

app.service('ContactService', function ($http) {
    this.getAll = () => {
        return $http.get('./data/contacts.json');
    }
});

app.filter('emailByTypeFilter', function () {
    return function (items, type) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.type == type) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

app.filter('counterEmailFilter', function () {
    return function (items, type) {
        let count = 0;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.type == type){
                if(item.type == 'draft'){
                    count++;
                } else {
                    if(item.unread == true){
                        count++;
                    }
                }
            }
        }
        return count;
    };
});