import { Component } from "@angular/core";

@Component({
  selector: "app-sidebar",
  template: `
    <div id="snav" class="animated zoomIn">
      <ul>
        <li *ngFor="let link of links">
          <a>
          <i (click)="scrollTo(link.selector)" class="{{link.icon}}"> </i>
          <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  `,
styleUrls: ["../../../app/styles/sidebar.scss"]
})
export class SidebarNgComponent {
  links: Array<{ selector: String; name: String; icon: String }>;

  constructor() {
    this.links = [
      {
        selector: "#home",
        icon: "fa fa-home",
        name: "Eden"
      },
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
  }

  scrollTo(selector) {
    const el = document.querySelector(selector);
    el.scrollIntoView();
  }
}
