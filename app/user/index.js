import './styles/user.css';

import angular from 'angular';
import {mod as user_services} from './services';
import {mod as user_controllers} from './controllers';
import {mod as user_directives} from './directives';

let mod = angular.module('app.user', ['ui.router', 'app.user.services', 'app.user.controllers', 'app.user.directives']);

mod.config( ($stateProvider) => {
  $stateProvider.state('app.user', {
      url: '/user',
      controller: 'UserCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/user/partials/user.html'
    }
  );
});
export {mod};
