export default class ServiceClass {
  popoverRetina: any;
  popoverSpeed: any;
  popoverSupport: any;
  popoverShop: any;
  popoverSocial: any;
  popoverCloud: any;
  constructor(appConfig: any) {
    "ngInject";
    this.popoverRetina = {
      content: appConfig.popoverRetina.content,
      title: appConfig.popoverRetina.title
    };
    this.popoverSpeed = {
      content: appConfig.popoverSpeed.content,
      title: appConfig.popoverSpeed.title
    };
    this.popoverSupport = {
      content: appConfig.popoverSupport.content,
      title: appConfig.popoverSupport.title
    };
    this.popoverShop = {
      content: appConfig.popoverShop.content,
      title: appConfig.popoverShop.title
    };
    this.popoverSocial = {
      content: appConfig.popoverSocial.content,
      title: appConfig.popoverSocial.title
    };
    this.popoverCloud = {
      content: appConfig.popoverCloud.content,
      title: appConfig.popoverCloud.title
    };
  }
}
