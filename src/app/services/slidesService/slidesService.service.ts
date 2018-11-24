export default class SlidesService {
  slides: any;
  constructor() {
    this.slides = [
      {
        id: 0,
        image: require("../../../assets/images/technologies/sails.png"),
        text: "Sails.js makes it easy and fast to build custom, enterprise-grade Node.js apps."
      },
      {
        id: 1,
        image: require("../../../assets/images/technologies/react_logo.png"),
        text: "A JAVASCRIPT LIBRARY for building interfaces"
      },
      {
        id: 2,
        image: require("../../../assets/images/technologies/angular_logo.png"),
        text: "AngularJS — Superheroic JavaScript MVW Framework"
      },
      {
        id: 3,
        image: require("../../../assets/images/technologies/node_logo.png"),
        text: "Event-driven I/O server-side JavaScript environment based on V8."
      }
    ];
  }

  getSlides() {
    return this.slides;
  }
}
