/*global Chats*/
/*Chats = new Mongo.Collection("chats");*/
Topics = new Mongo.Collection("Topics");

Meteor.users.allow({
  update: function(userId){
    if(Meteor.user()){
      return true;
    }else{
      return false;
    }
  }
});
