export default class User {

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  pretty_name() {
    return '<' + this.email + '>';
  }
}
