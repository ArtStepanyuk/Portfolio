import * as angular from "angular";

import LayoutNgComponent from "./layout";
import {HomeNgComponent} from "./home";
import {FeaturesNgComponent} from "./features";
import {ContactsNgComponent} from "./contact";
import {SidebarNgComponent} from "./sidebar";
import uiRouter from "@uirouter/angularjs";
import { downgradeComponent } from "@angular/upgrade/static";
import "../../directives/ngGallery.js";

// ToDo: missing components depend on angular ui and should be rewritten from scratch to work witn ng7

const LayoutNgModule = angular
  .module("ng2", [
    uiRouter,
    "jkuri.gallery"
  ])
  .config(["$stateProvider", "$locationProvider",
  function($stateProvider, $locationProvider) {
    $stateProvider.state("/ng2", {
      url: "/ng2",
      component: "appLayout"
    });
  }])
  .component("appLayout", LayoutNgComponent)
  .directive("appHome", downgradeComponent({component: HomeNgComponent}))
  .directive("appFeatures", downgradeComponent({component: FeaturesNgComponent}))
  .directive("appContacts", downgradeComponent({component: ContactsNgComponent}))
  .directive("appSidebar", downgradeComponent({component: SidebarNgComponent}))
  .name;

export default LayoutNgModule;
