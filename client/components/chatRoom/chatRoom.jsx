import React, {Component} from 'react';
import Message from '/client/components/chatRoom/message.jsx';

export default class ChatRoom extends Component {
  constructor(props){
    super(props);
     Meteor.subscribe("chats");
  }
  morePartners(){
    FlowRouter.go('partners');
  }
  sendMessage(e){
    event.preventDefault();
    let chat = Chats.findOne({
          _id: Session.get("chatId")
    });
    if (chat) {
      let msgs = chat.messages;
      if (!msgs) {
        msgs = [];
      }
      let  user = Meteor.users.findOne({
                _id: Meteor.userId()
            });
      if(this.refs.message.getDOMNode().value===''){
           return;
      }
      msgs.push({
          text: event.target.chat.value,
          userInfo: user.services.google
      });

      this.refs.message.getDOMNode().value= "";
      chat.messages = msgs;
      Meteor.call('updateMessage', chat);
    }
  }
  getMessages(){
    let chat = Chats.findOne({
             _id: Session.get("chatId")
         });
    return chat.messages;
  }
  render(){
    let messages = this.getMessages.bind(this);
    return(
      <div>
        <h2 class="text_h4">Type in the box below to send a message!</h2>
            <div class="col-md-12">
                <div class="well well-lg">
                  {
                    messages.map((messages)=>{
                      return <Message key={message._id} message = messages.messages/>
                    })
                  }
                </div>
            </div>
            <div class="col s12">
                <form class="js-send-chat">
                    <div class="col m10">
                        <input class="input" type="text" id="chat" name="chat" placeholder="type a message here..." ref="message"/>
                    </div>
                    <div class="col m2">
                        <button class="btn btn-default" onSubmit = {this.sendMessage}>send</button>
                    </div>
                </form>
            </div>
            <br/><br/><br/><br/>
            <button className="waves-effect waves-light  green darken-4 btn" onClick={this.morePartners}>Chat with other partner</button>
      </div>


    );
  }
}
