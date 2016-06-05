'use strict';

(function() {

class MainController {

  constructor($http, $scope) {
    this.$http = $http;
    this.awesomeThings = [];
    this.slides = [
    {
      image: 'http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png'
    },
    {
      image: 'http://chyngyz.github.io/super-heroic-angular/img/angularjs.png'
    }
  ];
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

}

  var myInterval = 3000;

angular.module('portfolioApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
