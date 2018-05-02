const { questionApi } = require('./question')
const { userApi } = require('./user')
const { userAnswerApi } = require('./userAnswer')
const { userAttributeApi } = require('./userAttribute')
const { userMatchingApi } = require('./userMatching')

module.exports = function(app) {
  // noteRoutes(app, db);  
  questionApi(app)
  userApi(app)
  userAnswerApi(app)
  userAttributeApi(app)
  userMatchingApi(app)
  // Other route groups could go here, in the future
};