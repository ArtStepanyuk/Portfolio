'use strict';

(function() {

    class MainController {

        constructor($http) {
            this.$http = $http;
            this.awesomeThings = [];
            this.myInterval = 3000;
            // ToDo: move and fill up popover somewhere away
            this.slides = [{
                image: 'http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png'
            }, {
                image: 'http://chyngyz.github.io/super-heroic-angular/img/angularjs.png'
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

        $onInit() {
            this.$http.get('/api/things').then(response => {
                this.awesomeThings = response.data;
            });
        }

        addThing() {
            if (this.newThing) {
                this.$http.post('/api/things', {
                    name: this.newThing
                });
                this.newThing = '';
            }
        }

        deleteThing(thing) {
            this.$http.delete('/api/things/' + thing._id);
        }

    }

    angular.module('portfolioApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController
        });

})();