'use strict';

import {loginComponent}         from './auth/login/login.component';
import {registrateComponent}    from './auth/registrate/registrate.component';
import {authMenuComponent}      from './auth/menu/authMenu';

import {gmailComponent}         from './gmail/gmail.component';
import {sideBarComponent}       from './gmail/sidebar/sidebar.component';
import {inboxComponent}         from './gmail/inbox/inbox.component';

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
        template: '<contact contacts-data="$ctrl.contactsData"></contact>',
    }).state({
        name: 'gmail.inbox',
        url: '/inbox',
        template: '<inbox emails-data="$ctrl.emailsData" contacts-data="$ctrl.contactsData" type-email="typeEmail"></inbox>',
        controller: function($scope) {
            $scope.typeEmail = 'inbox';
        }
    }).state({
        name: 'gmail.sent',
        url: '/sent',
        template: '<inbox emails-data="$ctrl.emailsData" contacts-data="$ctrl.contactsData" type-email="typeEmail"></inbox>',
        controller: function($scope) {
            $scope.typeEmail = 'sent';
        }
    }).state({
        name: 'gmail.draft',
        url: '/draft',
        template: '<inbox emails-data="$ctrl.emailsData" contacts-data="$ctrl.contactsData" type-email="typeEmail"></inbox>',
        controller: function($scope) {
            $scope.typeEmail = 'draft';
        }
    }).state({
        name: 'gmail.spam',
        url: '/spam',
        template: '<inbox emails-data="$ctrl.emailsData" contacts-data="$ctrl.contactsData" type-email="typeEmail"></inbox>',
        controller: function($scope) {
            $scope.typeEmail = 'spam';
        }
    }).state({
        name: 'gmail.detail',
        url: '/:emailId',
        template: '<email-detail emails-data="$ctrl.emailsData" contacts-data="$ctrl.contactsData"></email-detail>'
    })

    $urlRouterProvider.otherwise('/login');
});

app.component('login', loginComponent);
app.component('registrate', registrateComponent);
app.component('authMenu', authMenuComponent);

app.component('gmail', gmailComponent);
app.component('inbox', inboxComponent);
app.component('sidebar', sideBarComponent);

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

app.filter('byTypeEmailFilter', function ($state) {
    return function (items, type) {
        var filtered = [];
        console.log(type);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.type == type) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});