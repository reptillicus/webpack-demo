
export default class UserCtrl {
  constructor(UserService) {
    'ngInject'
    this.UserService = UserService
    console.log('UserCtrl')

    this.users = this.UserService.get_users()
  }
}
