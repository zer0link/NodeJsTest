let UserAnswerController = require('./../controllers/userAnswer')

module.exports.userAnswerApi = (app) => {
    app.post('/useranswer', (req, res) => {
        let controller = new UserAnswerController(app)
        let ua = controller.submit(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err)
            })
    })

}

