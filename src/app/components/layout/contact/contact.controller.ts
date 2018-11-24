import swal from "sweetalert2";

export default class ContactController {
  email: Object;
  emailForm: Object;
  $http: any;
  test: any;
  constructor($http: any) {
    this.email = {};
    this.emailForm = {};
    this.$http = $http;
  }

  public submitEmail($event: any, email: Object) {
    $event.preventDefault();
    return this.$http
      .post("/email", email)
      .then(() => {
        this.email = {};
        let msgMain = "Thank you";
        let msgHelper = "For contacting me I will respond ASAP";
        swal({
          title: msgMain,
          text: msgHelper,
          confirmButtonText: "Cool"
        });
      })
      .catch((_: any, status: String) => console.log("error", status));
  }
}

ContactController.$inject = ['$http']
