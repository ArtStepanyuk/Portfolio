(function() {
    'use strict';

    angular
        .module('portfolioApp')
        .service('slidesService', slidesService);

    function slidesService() {
        this.getSlides = getSlides;

        const slides = [
              {
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
              }
            ];
      
        function getSlides() {
        	return slides;
        }
    }
})();

