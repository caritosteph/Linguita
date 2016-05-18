import React, {Component} from 'react';
import Message from '/client/components/chatRoom/message.jsx';

export default class ChatRoom extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let style = {};
    if(this.props.info._id==Meteor.userId()){
      style.display = 'none';
    }

    return(
      <div>
        <h2 class="text-center">Type in the box below to send a message!</h2>
            <div class="col-md-12">
                <div class="well well-lg">
                  <Message/>
                </div>
            </div>
            <div class="col s12">
                <form class="js-send-chat">
                    <div class="col m10">
                        <input class="input" type="text" id="chat" name="chat" placeholder="type a message here..."/>
                    </div>
                    <div class="col m2">
                        <button class="btn btn-default">send</button>
                    </div>
                </form>
            </div>
      </div>


    );
  }
}
