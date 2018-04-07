'use strict';
const User = require('./../models/user');

class UserController{

    register(_user){
        var saveUser;
        return User.findOne({email:user.email})
        .then((existUser) => {
            if(existUser){
                saveUser = Object.assign(existUser, user);
            }
            else{
                saveUser = Object.assign(new User(), user);
            }
            return saveUser.save();
        })
    }

    getUser(email){
        return User.findOne({email});
    }

}

module.exports = UserController