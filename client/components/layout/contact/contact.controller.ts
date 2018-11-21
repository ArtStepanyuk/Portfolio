import swal from "sweetalert2";

export default class ContactController {
  email: Object;
  $http: any;
  constructor($http: any) {
    this.email = {};
    this.$http = $http;
  }

  submitEmail(email: Object) {
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
