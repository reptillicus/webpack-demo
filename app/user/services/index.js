import UserService from './user-service'

let mod = angular.module('app.user.services', [])

mod.service('UserService', UserService)

export default mod
