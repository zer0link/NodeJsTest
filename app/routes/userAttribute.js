'use strict';
let UserAttributeController = require('./../controllers/userAttribute');
let auth = require('./../auth/auth');

module.exports.userAttributeApi = (app) => {
    app.get('/userAttribute/:email', auth.verifyToken, (req, res) => {
        let controller = new UserAttributeController();
        controller.get(req.params.email)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

    app.post('/userAttribute', auth.verifyToken, (req, res) => {
        let controller = new UserAttributeController();
        controller.submit(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

}