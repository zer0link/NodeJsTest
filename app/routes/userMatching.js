'use strict';
let UserMatchingController = require('./../controllers/userMatching');

module.exports.userMatchingApi = (app) => {
    app.get('/userMatching/:email', (req, res) => {
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