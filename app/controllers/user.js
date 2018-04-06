'use strict';
const User = require('./../models/user')

class UserController{
    constructor(app){
        this._app = app;
    }

    register(user){
        User.findOne({email:user.email})
        .then((existUser) => {
            if(existUser){
                let data = Object.assign(existUser, user)
            }
            else{
                let data = Object.assign(new User(), user)
            }
            return data.save()
        })
    }

    getUser(email){
        let user = new User(app)
        return user.findOne({email})
    }

}

module.exports = UserController