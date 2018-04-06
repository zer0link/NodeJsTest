const { questionApi } = require('./question')
const { userApi } = require('./user')
const { userAnswerApi } = require('./userAnswer')

module.exports = function(app) {
  // noteRoutes(app, db);  
  questionApi(app)
  userApi(app)
  userAnswerApi(app)
  // Other route groups could go here, in the future
};