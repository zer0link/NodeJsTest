'use strict';
let QuestionController = require('./../controllers/question');

module.exports.questionApi = (app) => {
    app.get('/question', (req, res) => {
        let controller = new QuestionController();
        controller.getAll()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err);
            })
    })

    app.post('/question', (req, res) => {
        let controller = new QuestionController();
        controller.post(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err1:' + err);
            })
    });

    app.post('/question/batch', (req, res) => {
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