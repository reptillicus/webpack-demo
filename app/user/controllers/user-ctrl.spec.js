// import UserCtrl from './user-ctrl'
//
// describe('UserCtrl', ()=>{
//   it('should have users', ()=> {
//     let uc = new UserCtrl()
//     expect(uc.users).toBeGreaterThan(0)
//   })
// })

import {mod as user_mod} from '../index';
import UserCtrl from './user-ctrl';
// import 'angular-mocks'
// console.log(UserCtrl);
// import 'angular'

describe('UserCtrl', function() {

  let ctrl,
      $scope,
      UserService;

  beforeEach( ()=>{
    angular.mock.module(user_mod.name);
  });

  beforeEach( ()=> {
    angular.mock.inject( ($controller, _UserService_)=> {
      UserService = _UserService_;
      spyOn(UserService, 'get_users');
      ctrl = $controller('UserCtrl', {});
    });
  });

  it('should be defined and call services', function() {
    expect(ctrl).toBeDefined();
    expect(UserService.get_users).toHaveBeenCalled();
    // expect(ctrl.users.length).toBeGreaterThan(0);
  });

});
