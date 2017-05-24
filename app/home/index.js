// import the styles for webpack to pickup
import './styles/home.css'

import angular from 'angular'
import {mod as home_ctrls} from './controllers'
console.log(home_ctrls)

let mod = angular.module('app.home', ['app.home.controllers'])

mod.config( ($stateProvider) => {
  $stateProvider.state('app.home', {
      url: '/home',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/home/partials/home.html'
    }
  )
})



export {mod}
