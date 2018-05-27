'use strict';
const User = require('./../models/user');
const q = require('q');
const auth = require('../auth/auth')

class UserController{

    register(user){
        let deferred = q.defer();
        // var saveUser;
        User.findOne({email:user.email})
        .then(existUser => {
            if(existUser){
                deferred.reject('User already exists');
            }
            else{
                let saveUser = Object.assign(new User(), user);
                saveUser.save()
                .then(saveUser => {
                    let token = auth.sign(user);
                    deferred.resolve({token});
                });
            }            
        })
        return deferred.promise;
    }

    login(user){
        let deferred = q.defer();
        User.findOne({email: user.email})
        .then(existingUser => {
            if(existingUser){
                if(existingUser.password === user.password){
                    let token = auth.sign({
                        name: existingUser.name,
                        email: existingUser.email
                    });
                    deferred.resolve({token});
                }
                else{
                    deferred.reject('Invalid password');    
                }
            }
            else{
                deferred.reject('Invalid user');
            }
        });
        return deferred.promise;
    }

    getUser(email){
        return User.findOne({email});
    }

}

module.exports = UserController