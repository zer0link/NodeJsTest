'use strict';
let UserMatchingController = require('./../controllers/userMatching');
let auth = require('./../auth/auth');

module.exports.userMatchingApi = (app) => {
    app.get('/userMatching/:email', auth.verifyToken, (req, res) => {
        let controller = new UserMatchingController();
        controller.get(req.params.email)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

}