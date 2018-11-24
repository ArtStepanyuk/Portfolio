export default class FooterController {
  copyright: any
  constructor() {
    this.copyright = new Date().getFullYear();
  }
}
