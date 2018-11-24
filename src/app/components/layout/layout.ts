import * as angular from 'angular'

import layoutComponent from "./layout.component";
import homeComponent from "./home/home.component";
import servicesComponent from "./services/services.component";
import featuresComponent from "./features/features.component";
import projectsComponent from "./projects/projects.component";
import technologyComponent from "./technology/tecngology.component";
import contactComponent from "./contact/contact.components";
import sidebarComponent from "./sidebar/sidebar.component";
import uiRouter from "@uirouter/angularjs";
import { downgradeComponent } from '@angular/upgrade/static';
import { ListComponent} from  '../ng2/list'
import "./layout.scss";
import '../../directives/ngGallery.js'

let LayoutModule = angular
  .module("main", [
    uiRouter,
    'jkuri.gallery'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("/", {
      url: "/",
      component: "layout"
    });
  }])
  .component("layout", layoutComponent)
  .component("home", homeComponent)
  .component("services", servicesComponent)
  .component("features", featuresComponent)
  .component("projects", projectsComponent)
  .component("technology", technologyComponent)
  .component("contact", contactComponent)
  .component("appSidebar", sidebarComponent)
  .directive("test", downgradeComponent({component: ListComponent})) // angular 2 component
  .name;

export default LayoutModule;
