import React, {Component} from 'react';

export default class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    // let style = {};
    // if(this.props.info._id==Meteor.userId()){
    //   style.display = 'none';
    // }

    return(
    <div class="col s10">
       <div class="col s1">
           <img src="../userInfo.avatar" class="avatar_img2"/>
       </div>
       <div class="col s4">
           <strong>yo:</strong> akldasjdaksjd
       </div>
     </div>
    );
  }
}
