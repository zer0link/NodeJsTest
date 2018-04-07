'use strict';
let UserAnswerController = require('./../controllers/userAnswer');

module.exports.userAnswerApi = (app) => {
    app.get('/useranswer/:email', (req, res) => {
        let controller = new UserAnswerController();
        controller.getNext(req.params.email)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

    app.post('/useranswer', (req, res) => {
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

