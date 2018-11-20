import angular from 'angular';

import photoService from './photoService/photoService.service';
import slidesService from './slidesService/slidesService.service'
export default angular
  .module('app.services', [])
  .service({
    photoService,
    slidesService
  })
  .name
