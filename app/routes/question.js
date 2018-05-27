'use strict';
let QuestionController = require('./../controllers/question');
let auth = require('./../auth/auth');

module.exports.questionApi = (app) => {
    app.get('/question', auth.verifyToken, (req, res) => {

        let controller = new QuestionController();
        controller.getAll()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

    app.post('/question', auth.verifyToken, (req, res) => {
        let controller = new QuestionController();
        controller.post(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err1:' + err);
            })
    });

    app.post('/question/batch', auth.verifyToken, (req, res) => {
        let controller = new QuestionController();
        controller.postAll(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err1:' + err);
            })
    });
}