const noteRoutes = require('./note_routes');
const { questionApi } = require('./question')
const { userApi } = require('./user')

module.exports = function(app) {
  // noteRoutes(app, db);  
  questionApi(app)
  userApi(app)
  // Other route groups could go here, in the future
};