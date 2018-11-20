export default class ProjectsController {
  projects: any;
  constructor(photoService: any) {
    'ngInject'
    this.projects = photoService.getImages();
  }
}
