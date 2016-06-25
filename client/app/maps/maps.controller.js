'use strict';
(function() {
  class MapsComponent {
    constructor(uiGmapGoogleMapApi) {
      this.message = 'Hello';
      this.uiGmapGoogleMapApi = uiGmapGoogleMapApi;
      this.markers = []
      this.map = {
        center: {
          latitude: 51.219053,
          longitude: 4.404418
        },
        zoom: 14
      };
      this.options = {
        scrollwheel: false
      };
              this.controlText = 'I\'m a custom control';
        this.danger = false;
        this.controlClick = function () {
            this.danger = !this.danger;
            alert('custom control clicked!');
        };
      this.controlText = 'I\'m a custom control from inline template';
      this.danger = false;
      this.controlClick = function() {
        this.danger = !this.danger;
        alert('custom control from inline template clicked!');
      };
      // this.control.refresh({latitude: 32.779680, longitude: -79.935493});
      this.uiGmapGoogleMapApi.then(function(maps) {
        console.log(maps)
      });
    }
  }
  // Do stuff with your this.
  // Note: Some of the directives require at least something to be defined originally!
  // e.g. this.markers = []
  angular.module('portfolioApp')
    .component('maps', {
      templateUrl: 'app/maps/maps.html',
      controller: MapsComponent
    });
})();