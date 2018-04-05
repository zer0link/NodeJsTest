let UserController = require('./../controllers/user')

module.exports.userApi = (app) => {
    app.post('/user/register', (req, res) => {
        let controller = new UserController(app)
        controller.register(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err)
            })
    })

    app.get('/user/:email', (req, res) => {
        let controller = new UserController(app)
        controller.getUser(req.params.email)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log('err:' + err)
            })
    })
}
