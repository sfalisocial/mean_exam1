var path = require('path');
var users = require('../controllers/users.js');

function loginAuthentication(req,res,next){
  if (req.session.userId){
    next();
  }else{
    res.status(401).send("User not found");
  }
}

module.exports = function(app){
  app.get('/', users.index);
  app.post('/create', users.create);
  app.post('/login', users.login);
  app.use(loginAuthentication);
  app.get('/home', users.home);
  app.post('/logout', users.logout);
  // app.get('/user/:id', users.viewUser);
};
