export default class TechnologyController {
  feedback: any;
  index: any;
  slides: any;
  myInterval: Number;
  constructor(appConfig: any, slidesService: any) {
    "ngInject";
    this.feedback = appConfig.feedback;
    this.index = 0;
    this.slides = slidesService.getSlides();
    this.myInterval = 3000;
  }
  changeFeedback(clicked: String) {
    if (clicked === "prev" && this.index === 0) {
      this.index = this.feedback.length - 1;
    } else if (clicked === "next" && this.index === this.feedback.length - 1) {
      this.index = 0;
    } else if (clicked === "prev" && this.index !== 0) {
      this.index--;
    } else if (clicked === "next" && this.index !== this.feedback.length - 1) {
      this.index++;
    }
  }
}
