const {getAll, find, post} = require('./../controllers/question')
// var ObjectID = require('mongodb').ObjectID;

module.exports.questionApi = (app, db) => {
    app.get('/question', (req,res) => {
        getAll(db)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log('err:' + err )
        })
      })

    app.get('/question/:batchId', (req,res) => {
        let query = {title: 'some title', "text": "some body"}
        find(db,query)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log('err:' + err )
        })
      })

    app.post('/question', (req, res) => {
        post(db, req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log('err1:' + err )
        })
      });

      app.post('/question/batch', (req, res) => {
          let arr = req.body
          arr.forEach((x) => post(db, x))
      });
}

