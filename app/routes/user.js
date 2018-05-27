'use strict';
let UserController = require('./../controllers/user');
const jwt = require('jsonwebtoken');

module.exports.userApi = (app) => {
    app.post('/register', (req, res) => {
        let controller = new UserController();
        controller.register(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).send({ error: err })
            })
    })

    // app.get('/user/:email', (req, res) => {
    //     let controller = new UserController();
    //     controller.getUser(req.params.email)
    //         .then((result) => {
    //             res.send(result);
    //         })
    //         .catch((err) => {
    //             console.log('err:' + err);
    //         })
    // })

    app.post('/login', (req, res) => {
        let controller = new UserController();
        controller.login(req.body)
        .then(token => {
            res.send(token)
        })
        .catch(err => {
            res.status(500).send({ error: err })
        })
      });
}

