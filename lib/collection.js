/*global Chats*/
/*Chats = new Mongo.Collection("chats");*/
Topics = new Mongo.Collection("Topics");
SubTopics = new Mongo.Collection("SubTopics");


Meteor.users.allow({
  update: function(userId){
    if(Meteor.user()){
      return true;
    }else{
      return false;
    }
  }
});
