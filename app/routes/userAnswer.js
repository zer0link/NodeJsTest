'use strict';
let UserAnswerController = require('./../controllers/userAnswer');
let auth = require('./../auth/auth');

module.exports.userAnswerApi = (app) => {
    app.get('/useranswer', auth.verifyToken, (req, res) => {
        let controller = new UserAnswerController();
        console.log('req.user.email', req.user.email);
        controller.getNext(req.user.email)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

    app.post('/useranswer', auth.verifyToken, (req, res) => {
        let controller = new UserAnswerController();
        controller.submit(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

}

