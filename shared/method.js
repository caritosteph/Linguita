
Meteor.methods({
    addChat: function(filter, otherUserId) {
        let chat = Chats.findOne(filter);
        if (!chat) {
            let users = {
                user1Id: Meteor.userId(),
                user2Id: otherUserId
            };
            return Chats.insert(users);
        }
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
