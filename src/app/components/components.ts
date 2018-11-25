import Layout from "./ng1/layout";
import LayoutNG from "./ng2";
import * as angular from "angular";

const componentModule = angular.module("app.components", [
  Layout,
  LayoutNG
])
.name;

export default componentModule;
