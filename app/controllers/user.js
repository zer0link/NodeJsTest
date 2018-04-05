'use strict';
const User = require('./../models/user')

class UserController{
    constructor(app){
        this._app = app;
    }

    register(user){
        let data = Object.assign(new User(), question)
        return data.save()
    }

    getUser(email){
        let user = new User(app)
        return user.find({email})
    }

}

module.exports = UserController