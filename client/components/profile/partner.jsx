import React, {Component} from 'react';

export default class Partner extends Component {
  constructor(props){
    super(props);
  }
  startChatRoom(e){
    FlowRouter.go('/chatroom/'+e.target.id);
  }
  render(){
    const style = {};
    if(this.props.info._id === Meteor.userId()){
      style.display = 'none';
    }

    return(
      <div className="col s12 m3" style={style}>
          <div className="card card-avatar">
              <div className="waves-effect waves-block waves-light">
                  <img src={this.props.profile.picture}/>
              </div>
              <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{this.props.profile.name} <br/>
                  <small><a className="teal-text" href="#"></a>{this.props.profile.email}</small></span>
                  <br/>
                  <div className="col m12">
                    <div className ="col m6">
                      <button className="waves-effect waves-light  blue darken-4 btn" onClick={this.startChatRoom} id={this.props.info._id}>Chat</button>
                    </div>
                    <div className ="col m6">
                      <button className="waves-effect waves-light  green darken-4 btn"id={this.props.info._id}>Talk</button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
