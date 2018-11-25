export default class ProjectsController {
  projects: any;
  constructor(photoService: any) {
    this.projects = photoService.getImages();
  }
}

ProjectsController.$inject = ['photoService']
