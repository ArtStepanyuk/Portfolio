import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <section>
      <div class="jumbotron slide" id="home">
        <div class="intro">
          <div class="container">
            <div class="row">
              <h1 class="text-center">Project <span>Eden</span></h1>
              <p class="text-center">
                Get all the work done. Limitation is only your imagination and
                my time.
              </p>
              <br />
            </div>
            <div class="row triangles">
              <div class="up-triangle animated fadeInUp hidden-xs">
                <div class="info">
                  <i class="icon icon-cogs"></i><br />
                  Bootstrap 3
                </div>
              </div>
              <div class="down-triangle animated fadeInDown">
                <div class="info">
                  Support<br />
                  <i class="icon icon-envelope-alt"></i>
                </div>
              </div>
              <div class="up-triangle animated fadeInUp hidden-xs">
                <div class="info">
                  <i class="icon icon-picture"></i><br />
                  Colorful
                </div>
              </div>
              <div class="down-triangle animated fadeInDown hidden-xs">
                <div class="info">
                  Clean Code<br />
                  <i class="icon icon-code"></i>
                </div>
              </div>
              <div
                class="down-triangle animated fadeInDown visible-sm hidden-xs"
              >
                <div class="info">
                  Clean Code<br />
                  <i class="icon icon-code"></i>
                </div>
              </div>
              <div class="up-triangle animated fadeInUp hidden-xs">
                <div class="info">
                  <i class="icon icon-thumbs-up"></i><br />
                  Awesome
                </div>
              </div>
              <div class="down-triangle animated fadeInDown hidden-xs">
                <div class="info">
                  Secure<br />
                  <i class="icon icon-laptop"></i>
                </div>
              </div>
              <div class="up-triangle animated fadeInUp res-hide">
                <div class="info">
                  <i class="icon icon-comments-alt"></i><br />
                  Helpful
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeNgComponent {
  constructor() {}
}
