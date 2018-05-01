'use strict';
let UserAttributeController = require('./../controllers/userAttribute');

module.exports.userAttributeApi = (app) => {
    app.get('/userAttribute/:email', (req, res) => {
        let controller = new UserAttributeController();
        controller.get(req.params.email)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

    app.post('/userAttribute', (req, res) => {
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