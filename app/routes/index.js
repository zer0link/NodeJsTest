const noteRoutes = require('./note_routes');
const { questionApi } = require('./question')

module.exports = function(app, db) {
  noteRoutes(app, db);  
  questionApi(app, db)
  // Other route groups could go here, in the future
};