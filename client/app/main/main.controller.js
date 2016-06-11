'use strict';

(function() {

    class MainController {

        constructor($http, appConfig) {
            this.$http = $http;
            this.popoverRetina = appConfig.popoverRetina;
            this.popoverSpeed = appConfig.popoverSpeed;
            this.popoverSupport = appConfig.popoverSupport;
            this.popoverShop = appConfig.popoverShop;
            this.popoverSocial = appConfig.popoverSocial;
            this.popoverCloud = appConfig.popoverCloud;
            this.popoverSpeed = appConfig.popoverSpeed;
            this.feedback = appConfig.feedback;
            this.myInterval = 3000;
            this.showLogIn = false;
           
            this.slides = [{
                id: 1,
                image: '../../assets/images/technologies/react_logo.png',
                text: 'A JAVASCRIPT LIBRARY for building interfaces'
            }, {
                id: 2,
                image: '../../assets/images/technologies/angular_logo.png',
                text: 'AngularJS — Superheroic JavaScript MVW Framework'
            }, {
                id: 3,
                image: '../../assets/images/technologies/node_logo.png',
                text: 'Event-driven I/O server-side JavaScript environment based on V8.'
            }, {
                id: 4,
                image: '../../assets/images/technologies/sails.png',
                text: 'Sails.js makes it easy and fast to build custom, enterprise-grade Node.js apps.'
            }];
            this.popoverRetina = {
                content: this.popoverRetina.content,
                title: this.popoverRetina.title
            };
            this.popoverSpeed = {
                content: this.popoverSpeed.content,
                title: this.popoverSpeed.title
            };
            this.popoverSupport = {
                content: this.popoverSupport.content,
                title: this.popoverSupport.title
            };
            this.popoverShop = {
                content: this.popoverShop.content,
                title: this.popoverShop.title
            };
            this.popoverSocial = {
                content: this.popoverSocial.content,
                title: this.popoverSocial.title
            };
            this.popoverCloud = {
                content: this.popoverCloud.content,
                title: this.popoverCloud.title
            };
        }

    }

    angular.module('portfolioApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController
        });

})();
