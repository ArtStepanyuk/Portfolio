import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <div class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" (click)="toggleNavbar()">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">Portfolio</a>
        </div>
        <div
          uib-collapse="isCollapsed"
          class="navbar-collapse collapse"
          id="navbar-main"
        >
          <ul class="nav navbar-nav"></ul>

          <ul class="nav navbar-nav navbar-right">
            <li
              *ngFor="let link of links"
              class="link-style"
              (click)="scrollTo(link.selector)"
            >
              <a>{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [".link-style { cursor: pointer; color: white }"]
})
export class NavbarComponent {
  links: Array<{ selector: String; name: String; icon: String }>;
  isCollapsed: Boolean;
  constructor() {
    this.links = [
      {
        selector: "#services",
        icon: "fa fa-line-chart",
        name: "Services"
      },
      {
        selector: "#features",
        icon: "fa fa-css3",
        name: "Features"
      },
      {
        selector: "#clients",
        icon: "fa fa-html5",
        name: "Technology"
      },
      {
        selector: "#contact",
        icon: "fa fa-envelope",
        name: "Contact"
      }
    ];
    this.isCollapsed = true;
  }

  scrollTo(selector) {
    const el = document.querySelector(selector);
    el.scrollIntoView();
  }
  toggleNavbar() {
    // angular ui for angular 1.5 doesnt work with angular 6 :) so a hack
    const el = document.querySelector("#navbar-main");
    el.classList.toggle("in");
  }
}
