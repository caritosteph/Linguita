import React, {Component} from 'react';
import Message from '/client/components/chatRoom/message.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ChatRoom extends TrackerReact(Component) {
  constructor(props){
    super(props);
  }
  morePartners(){
    FlowRouter.go('partners');
  }
  sendMessage(e){
    e.preventDefault();
    let chat = Chats.findOne({
          _id: Session.get("chatId")
    });
    if (chat) {
      let msgs = chat.messages;
      // if (!msgs) {
      //   msgs = [];
      // }
      let  user = Meteor.users.findOne({
                _id: Meteor.userId()
            });
      if(e.target.message.value===''){
           return;
      }
      msgs.push({
          _id: '_' + Math.random().toString(36).substr(2, 9),
          text: e.target.message.value,
          userInfo: user.services.google
      });
      e.target.message.value= "";
      chat.messages = msgs;
      Meteor.call('updateMessage', chat);
    }
  }
  getMessages(){
    console.log("get message aqui bota el error");
    console.log("chat -... : ",Chats.findOne({_id: Session.get("chatId")}))
    return Chats.findOne({_id: Session.get("chatId")}).messages;
  }

  render(){
    let messages = this.getMessages();
    return(
      <div>
        <h4 className="text_h4 center">Type in the box below to send a message!</h4>
            <div className="col-md-12">
                <div className="well well-lg">
                  {
                      messages.map((message)=>{
                          return <Message key= {message._id}
                                          message = {message}/>
                      })
                  }
                </div>
            </div>
            <div classNameName="col s12">
                <form onSubmit = {this.sendMessage}>
                    <div className="col m10">
                        <input classNameName="input"
                               type="text"
                               id="message"
                               name="message"
                               placeholder="type a message here..."/>
                    </div>
                </form>
            </div>
            <br/><br/><br/><br/>
            <button className="waves-effect waves-light  green darken-4 btn" onClick={this.morePartners}>Chat with other partner</button>
      </div>


    );
  }
}
