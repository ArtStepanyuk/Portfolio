import * as angular from "angular";

import layoutComponent from "./layout.component";
import homeComponent from "./home/home.component";
import servicesComponent from "./services/services.component";
import featuresComponent from "./features/features.component";
import projectsComponent from "./projects/projects.component";
import technologyComponent from "./technology/tecngology.component";
import contactComponent from "./contact/contact.components";
import sidebarComponent from "./sidebar/sidebar.component";
import uiRouter from "@uirouter/angularjs";
import "./layout.scss";
import "../../directives/ngGallery.js";

const LayoutModule = angular
  .module("main", [
    uiRouter,
    "jkuri.gallery"
  ])
  .config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
  function($stateProvider, $urlRouterProvider,  $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true).hashPrefix("!");
    $stateProvider.state("/ng1", {
      url: "/ng1",
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
  .component("sidebar", sidebarComponent)
  .name;

export default LayoutModule;
