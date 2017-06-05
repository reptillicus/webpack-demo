// app wide styles
import './styles/index.css';

import angular from 'angular';
// import _ from 'lodash'
// console.log(_)
//our application sub-modules
import {mod as about} from './about';
import {mod as home} from './home';
import {mod as user} from './user';

let app = angular.module('app', ['ui.router', about.name, home.name, user.name]);

app.config( ($stateProvider, $urlServiceProvider) => {
  $urlServiceProvider.rules.otherwise({state: 'app.home'});

  $stateProvider.state('app', {
      url: '',
      abstract: true
    }
  );
});
