
export default class UserCtrl {
  constructor(UserService) {
    'ngInject';
    this.UserService = UserService;

    this.users = this.UserService.get_users();
  }
}
