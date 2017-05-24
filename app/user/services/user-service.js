import User from '../models/user.js'

export default class UserService {

  constructor ($http) {
    'ngInject'
    this.$http = $http
  }

  get_user(uname) {
    //search for user
    //this.$http.get('/users/search')
  }

  get_users() {
    let users = [
      {name: 'Joe', email: 'joe@tacc.com'},
      {name: 'Marjo', email: 'marjo@tacc.com'},
      {name: 'Josue', email: 'josue@tacc.com'},
      {name: 'Alex', email: 'alex@tacc.com'},
      {name: 'Andrew', email: 'andrew@tacc.com'},
    ]

    users = users.map( (u)=>{
      return new User(u.name, u.email)
    })
    return users
  }
}
