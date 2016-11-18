myApp.factory('userFactory', ['$http', function($http){
var factory = {}
factory.getusers = function(callback){
  $http.get('/').then(function(returned_data){
    callback(returned_data.data)
  })
}

factory.adduser = function(user, callback){
  $http.post('/create', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginuser = function(user, callback){
  $http.post('/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.home = function(callback){
  $http.get('/home').then(function(data){
    callback(data.data);
  })
}

factory.logout=function(user, callback){
 $http.post('/logout', user).then(function(returned_data){
   callback(returned_data.data);
 })
}

return factory;
}]);
