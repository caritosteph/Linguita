import React, {Component} from 'react';

export default class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let user = this.props.message.userInfo;
    return(
    <div className="col m10">
       <div className="col m1">
           <img src={user.picture} className="avatar-chat"/>
       </div>
       <div className="col m8">
           <strong>{user.given_name}</strong> {this.props.message.text}
       </div>
     </div>
    );
  }
}
