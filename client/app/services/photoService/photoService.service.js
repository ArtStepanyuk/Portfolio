(function () {
  'use strict';

  angular
    .module('portfolioApp')
    .service('photoService', photoService);

  function photoService() {
    this.getImages = getImages;

    // ToDO: deleete on code clean up or keep for future
    const oldProjects = [
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

    const projects = [
      {
        id: 1,
        img: 'assets/images/projects2/1.jpg',
        thumb: 'assets/images/projects2/1t.jpg'
      },
      {
        id: 2,
        img: 'assets/images/projects2/2.jpg',
        thumb: 'assets/images/projects2/2t.jpg'
      },
      {
        id: 3,
        img: 'assets/images/projects2/3.jpg',
        thumb: 'assets/images/projects2/3t.jpg'
      },
      {
        id: 4,
        img: 'assets/images/projects2/4.jpg',
        thumb: 'assets/images/projects2/4t.jpg'
      },
      {
        id: 5,
        img: 'assets/images/projects2/5.jpg',
        thumb: 'assets/images/projects2/5t.jpg'
      },
      {
        id: 6,
        img: 'assets/images/projects2/6.jpg',
        thumb: 'assets/images/projects2/6t.jpg'
      },
      {
        id: 7,
        img: 'assets/images/projects2/7.jpg',
        thumb: 'assets/images/projects2/7t.jpg'
      },
      {
        id: 8,
        img: 'assets/images/projects2/8.jpg',
        thumb: 'assets/images/projects2/8t.jpg'
      }
    ];

    function getImages() {
      return projects;
    }
  }
})();

