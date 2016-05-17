import React,{Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Menu extends TrackerReact(Component){
  onLogout(e){
    e.preventDefault();
    Meteor.call('updateStatus',Meteor.userId(),false);
    Meteor.logout(function(err){
      if(err){
        alert('error : '+ err);
        throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
      }else{
        FlowRouter.go('home')
      }
    });
  };
  userInfo(){
    let loginUser;
    if(Meteor.user()){
      loginUser = Meteor.user().services.google;
    }else{
      loginUser = {};
      FlowRouter.go('home');
    }
    return loginUser;
  }
  render(){
    let user = this.userInfo();
    return(
      <div>
        <div className="container"><a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only">
          <i className="material-icons">menu</i></a>
        </div>
          <ul id="nav-mobile" className="side-nav fixed">
            <li className="logo">
                <img src={user.picture} className="avatar"/>
                <p>{user.name}</p>
            </li>
            <li className="bold"><a href="about.html" className="waves-effect waves-teal">Friends</a></li>
            <li className="bold"><a href="getting-started.html" className="waves-effect waves-teal">Messages</a></li>
            <li className="bold"><a href="http://materializecss.com/mobile.html" className="waves-effect waves-teal">Settings</a></li>
            <li className="bold"><a href="#" className="waves-effect waves-teal" onClick={this.onLogout.bind(this)}>Logout</a></li>
        </ul>
      </div>

    );
  }
}
