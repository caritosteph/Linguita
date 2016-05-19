import React, {Component} from 'react';

export default class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div class="col m10">
       <div class="col m2">
           <img src={this.props.chat} class="avatar_img2"/>
       </div>
       <div class="col m8">
           <strong>{this.props.chat}</strong> {this.props.chat.messages}
       </div>
     </div>
    );
  }
}
