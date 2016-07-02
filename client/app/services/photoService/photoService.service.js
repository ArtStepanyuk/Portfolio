(function() {
    'use strict';

    angular
        .module('portfolioApp')
        .service('photoService', photoService);

    function photoService() {
        this.getImages = getImages;

        const projects = [
              {
                id: 1,
                img: 'assets/images/projects/9.jpg',
                thumb: 'assets/images/projects/9.jpg'
              },
              {
                id: 2,
                img: 'assets/images/projects/2.jpg',
                thumb: 'assets/images/projects/2.jpg'
              },
              {
                id: 3,
                img: 'assets/images/projects/27.jpg',
                thumb: 'assets/images/projects/27.jpg'
              },
              {
                id: 4,
                img: 'assets/images/projects/4.jpg',
                thumb: 'assets/images/projects/4.jpg'
              },
              {
                id: 5,
                img: 'assets/images/projects/5.jpg',
                thumb: 'assets/images/projects/5.jpg'
              },
              {
                id: 6,
                img: 'assets/images/projects/6.jpg',
                thumb: 'assets/images/projects/6.jpg'
              },
              {
                id: 7,
                img: 'assets/images/projects/25.jpg',
                thumb: 'assets/images/projects/25.jpg'
              },
              {
                id: 8,
                img: 'assets/images/projects/8.jpg',
                thumb: 'assets/images/projects/8.jpg'
              }
            ];

        ////////////////

        function getImages() {
        	return projects;
        }
    }
})();

