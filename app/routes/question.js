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
            console.log('err:' + err )
        })
      });

      app.post('/question/:batchId', (req, res) => {
          //console.log(req.body)
          let arr = req.body.data
          console.log(arr)
          arr.foreach((x) => console.log(x))
          
        // post(db, req.body)
        // .then((result) => {
        //     res.send(result);
        // })
        // .catch((err) => {
        //     console.log('err:' + err )
        // })
      });
}

