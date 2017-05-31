import UserService from './user-service';

describe('UserService', ()=>{
  it('should return users', ()=> {;
    let us = new UserService();
    let users = us.get_users();
    expect(users.length).toBeGreaterThan(0);
  });
});
