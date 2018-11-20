// import photoService from '../../services/photoService';


class MainController {
  name: String
  constructor(photoService: any) {
    "ngInject";
    this.name = 'home';
    console.log(photoService)
  }
}

export default MainController;
