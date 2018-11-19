// import photoService from '../../services/photoService';


class MainController {
  constructor(photoService) {
    "ngInject";
    this.photoService = photoService
    this.name = 'home';
    console.log(this.photoService)
  }
}

export default MainController;

// (function() {

//     class MainController {

//         constructor($http, appConfig, photoService, slidesService) {
//             this.$http = $http;
//             this.feedback = appConfig.feedback;

//             this.myInterval = 3000;
//             this.showLogIn = false;
//             this.emailForm = {};
//             this.index = 0;

//             this.projects = photoService.getImages();
//             this.slides = slidesService.getSlides();

//             this.popoverRetina = {
//                 content: appConfig.popoverRetina.content,
//                 title: appConfig.popoverRetina.title
//             };
//             this.popoverSpeed = {
//                 content: appConfig.popoverSpeed.content,
//                 title: appConfig.popoverSpeed.title
//             };
//             this.popoverSupport = {
//                 content: appConfig.popoverSupport.content,
//                 title: appConfig.popoverSupport.title
//             };
//             this.popoverShop = {
//                 content: appConfig.popoverShop.content,
//                 title: appConfig.popoverShop.title
//             };
//             this.popoverSocial = {
//                 content: appConfig.popoverSocial.content,
//                 title: appConfig.popoverSocial.title
//             };
//             this.popoverCloud = {
//                 content: appConfig.popoverCloud.content,
//                 title: appConfig.popoverCloud.title
//             };

//             this.changeFeedback = function (clicked) {
//               if(clicked === 'prev' && this.index === 0) {
//                 this.index = this.feedback.length -1;
//               }
//               else if(clicked === 'next' && this.index === this.feedback.length -1) {
//                 this.index = 0;
//               }
//               else if(clicked === 'prev' && this.index !== 0) {
//                 this.index--;
//               }
//               else if(clicked === 'next' && this.index !== this.feedback.length -1) {
//                 this.index++;
//               }
//             };

//             this.submitEmail = function (email) {
//               return $http.post('/email', email)
//                 .then(() => {
//                   this.email = {};
//                   let msgMain = 'Thank you';
//                   let msgHelper = 'For contacting me I will respond ASAP';
//                   sweetAlert(msgMain, msgHelper);
//                 })
//                 .catch((data, status) =>
//                   console.log('error', status));
//             };

//         }
//     }

// })();
