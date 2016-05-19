
Meteor.methods({
    addChat: function(filter, otherUserId) {
        let chat = Chats.findOne(filter);
        console.log("addChat: ",chat);
        if (!chat) {
              console.log("no existe chat ..creandolo ");
            let users = {
                user1Id: Meteor.userId(),
                user2Id: otherUserId
            };
              console.log("creando users: ", users);
            return Chats.insert(users);
        }
        console.log("addChat: ",chat._id);
        return chat._id;
    },
    updateMessage: function(chat) {
        if (this.userId) {
            Chats.update(chat._id, chat);
        }else{
        	return;
        }
    },
    updateStatus: function(userId,status){
        Meteor.users.update(userId,{
          $set:{status: status}
        },{upsert:true});
    }
});
