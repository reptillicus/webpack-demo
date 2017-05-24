import angular from 'angular'

import {mod as about_controllers} from './controllers'

let mod = angular.module('app.about', ['app.about.controllers'])

mod.config( ($stateProvider) => {
  $stateProvider.state('app.about', {
      url: '/about',
      controller: 'AboutCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/about/partials/about.html'
    }
  )
})

export {mod}
