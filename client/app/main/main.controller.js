'use strict';

(function() {

    class MainController {

        constructor($http) {
            this.$http = $http;
            this.awesomeThings = [];
            this.myInterval = 3000;
            this.showLogIn = false;
            // ToDo: move and fill up popover somewhere away
            this.slides = [{
                id: 1,
                image: '../../assets/images/technologies/react_logo.png',
                text: "A JAVASCRIPT LIBRARY for building interfaces"
            }, {
                id: 2,
                image: '../../assets/images/technologies/angular_logo.png',
                text: "AngularJS — Superheroic JavaScript MVW Framework"
            }, {
                id: 3,
                image: '../../assets/images/technologies/nodejs_logo.png',
                text: "Event-driven I/O server-side JavaScript environment based on V8."
            }, {
                id: 4,
                image: '../../assets/images/technologies/sails.png',
                text: "Sails.js makes it easy and fast to build custom, enterprise-grade Node.js apps."
            }];
            this.popoverRetina = {
                content: 'lorem',
                title: 'title'
            };
            this.popoverSpeed = {
                content: 'lorem',
                title: 'title'
            };
            this.popoverSupport = {
                content: 'lorem',
                title: 'title'
            };
            this.popoverSocial = {
                content: 'lorem',
                title: 'title'
            };
            this.popoverCloud = {
                content: 'lorem',
                title: 'title'
            };
            this.popoverSpeed = {
                content: 'lorem',
                title: 'title'
            };
        }

        // use this refference for CRUD

        // $onInit() {
        //     this.$http.get('/api/things').then(response => {
        //         this.awesomeThings = response.data;
        //     });
        // }

        // addThing() {
        //     if (this.newThing) {
        //         this.$http.post('/api/things', {
        //             name: this.newThing
        //         });
        //         this.newThing = '';
        //     }
        // }

        // deleteThing(thing) {
        //     this.$http.delete('/api/things/' + thing._id);
        // }

    }

    angular.module('portfolioApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController
        });

})();