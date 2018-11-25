import { Component } from "@angular/core";

@Component({
  selector: "app-contacts",
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="alert alert-success hidden" id="contactSuccess">
              <strong>Success!</strong> Your message has been sent to us.
            </div>
            <div class="alert alert-error hidden" id="contactError">
              <strong>Error!</strong> There was an error sending your message.
            </div>
            <h2 class="short"><strong>Contact</strong> Me</h2>
            <form class="clearfix" name="emailForm" novalidate>
              <div class="row">
                <div class="col-sm-6 form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    placeholder="What is your name?"
                    ng-model="email.name"
                    name="name"
                    class="form-control input-lg"
                    required
                  />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    placeholder="Please enter valid email"
                    ng-model="email.email"
                    name="email"
                    class="form-control input-lg"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 form-group">
                  <label for="message">Message</label>
                  <textarea
                    rows="4"
                    ng-model="email.text"
                    name="message"
                    class="form-control"
                    required
                  >
                  </textarea>
                </div>
              </div>
              <button
                class="btn btn-success btn-xlg"
                [disabled]="emailForm.$invalid"
                (click)="submitEmail($event, email)"
              >
                Send Message
              </button>
            </form>
          </div>
          <div class="col-md-offset-1 col-md-5">
            <br />
            <h4 class="pull-top">Get in <strong>touch</strong></h4>
            <p>
              Feel free to contact me via skype or email. It's always a pleasure
              to hear from you.
            </p>
            <hr />
            <h4>The <strong>Office</strong></h4>
            My comfy appartment
            <ul class="unstyled">
              <li>
                <i class="icon-map-marker"></i>
                <strong>Skype:</strong> lstepanyukl
              </li>
              <li>
                <i class="icon-phone"></i> <strong>Phone:</strong> +(380)
                0989882459
              </li>
              <li>
                <i class="icon-envelope"></i> <strong>Email:</strong>
                <a href="mailto:lmasamunel1988@gmail.com"
                  >lmasamunel1988@gmail.com</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactsNgComponent {
  email: Object;
  emailForm: Object;
  $http: any;
  test: any;
  constructor() {
    this.email = {};
    this.emailForm = {};
  }

  public submitEmail($event: any, email: Object) {
    $event.preventDefault();
    console.log('clicked')
    // return this.$http
    //   .post("/email", email)
    //   .then(() => {
    //     this.email = {};
    //     const msgMain = "Thank you";
    //     const msgHelper = "For contacting me I will respond ASAP";
    //     swal({
    //       title: msgMain,
    //       text: msgHelper,
    //       confirmButtonText: "Cool"
    //     });
    //   })
    //   .catch((_: any, status: String) => console.log("error", status));
  }
}
