import angular from "angular";
import mainComponent from "./main.component";
import homeComponent from "./home/home.component";
import servicesComponent from "./services/services.component";
import featuresComponent from "./features/features.component";
import projectsComponent from "./projects/projects.component";
import technologyComponent from "./technology/tecngology.component";
import contactComponent from "./contact/contact.components";
import uiRouter from "@uirouter/angularjs";
import "./main.scss";

let mainModule = angular
  .module("main", [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("main", {
      url: "/",
      component: "main"
    });
  })
  .component("main", mainComponent)
  .component("home", homeComponent)
  .component("services", servicesComponent)
  .component("features", featuresComponent)
  .component("projects", projectsComponent)
  .component("technology", technologyComponent)
  .component("contact", contactComponent)
  .name;

export default mainModule;
