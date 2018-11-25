import { Component } from "@angular/core";

@Component({
  selector: "app-features",
  template: `
    <section class="slider" id="features">
      <div class="container">
        <div class="inner-page">
          <h2 class="text-center">Awesome Story.</h2>
          <p class="text-center">
            Make your projects trully awesome. Tell me your story and watch<br />
            it turn into reality.
          </p>
        </div>
        <div class="row inner-page">
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="fa fa-life-ring fa-lg" aria-hidden="true"></i>
              </div>
              <div class="feature-box-info">
                <h4 class="shorter">Customer Support</h4>
                <p class="tall">Full support for a project.</p>
              </div>
            </div>
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="fa fa-html5 fa-lg" aria-hidden="true"></i>
              </div>
              <div class="feature-box-info">
                <h4 class="shorter">HTML5 / CSS3 / JS</h4>
                <p class="tall">Dominating web stack.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="fa fa-bug fa-lg" aria-hidden="true"></i>
              </div>
              <div class="feature-box-info">
                <h4 class="shorter">Bug Fixing</h4>
                <p class="tall">Have a problem with existing project?</p>
              </div>
            </div>
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="fa fa-cloud fa-lg" aria-hidden="true"></i>
              </div>
              <div class="feature-box-info">
                <h4 class="shorter">Deployment</h4>
                <p class="tall">Deployment of your project and CI.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="fa fa-cloud fa-lg" aria-hidden="true"></i>
              </div>
              <div class="feature-box-info">
                <h4 class="shorter">Quality</h4>
                <p class="tall">Demos with constant quality control.</p>
              </div>
            </div>
            <div class="feature-box">
              <div class="feature-box-icon">
                <i class="fa fa-child fa-lg" aria-hidden="true"></i>
              </div>
              <div class="feature-box-info">
                <h4 class="shorter">Design</h4>
                <p class="tall">Something unique and memorable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesNgComponent {
  constructor() {}
}
