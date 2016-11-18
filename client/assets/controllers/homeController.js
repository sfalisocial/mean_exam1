myApp.controller('homeController', ['userFactory', '$location', homeController]);

 function homeController(userFactory, $location){
  var _this = this;
//   function getTopics(){
//     userFactory.getTopics(function(data){
//       _this.topics=data;
//     })
//   }
//   getTopics();
//
//   this.addTopic = function(){
//     userFactory.addTopic(this.topic, function(data) {
//       if(data.hasOwnProperty('errors')){
//         _this.topicErrors = data.errors;
//         console.log(data.errors);
//       } else{
//         getTopics();
//       }
//     })
//   }
this.logout=function(){
   userFactory.logout(this.user, function(data){
     _this.users=data;
     $location.path('/');
   })
 }
}
