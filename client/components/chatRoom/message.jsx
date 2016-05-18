import React, {Component} from 'react';

export default class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div class="col m10">
       <div class="col m2">
           <img src={this.props.profile.picture} class="avatar_img2"/>
       </div>
       <div class="col m8">
           <strong>{this.props.profile.name}</strong> {this.props.info.message}
       </div>
     </div>
    );
  }
}
