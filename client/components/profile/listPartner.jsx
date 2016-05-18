import React, {Component} from 'react';
import Partner from '/client/components/profile/partner.jsx'

export default class ListPartner extends Component {
  constructor(props){
    super(props);
  }
  getConnectedUsers(){
    return Meteor.users.find({status:true}).fetch();
  }
  render(){
    let connectedUsers = this.getConnectedUsers();
    return(
      <div>
        {connectedUsers.map((connected)=>{
          return <Partner key= {connected._id} profile = {connected.services.google} info={connected}/>
        })}
      </div>
    );
  }
}
