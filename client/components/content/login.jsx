import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';

export default class Login extends TrackerReact(Component){
  onLogin(e){
    e.preventDefault();
    Meteor.subscribe("users");
    Meteor.subscribe("topics");
    Meteor.subscribe("chats");

    Meteor.loginWithGoogle({
        requestPermissions: ['email', 'profile'],
    },function(err){
      if(err){
        alert('error : '+ err);
        throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
      }else{
        Meteor.call('updateStatus',Meteor.userId(),true);
        FlowRouter.go('interests')
      }
    });
  };
  render(){
    return (<button className="waves-effect waves-light  red darken-4 btn" onClick={this.onLogin.bind(this)}>
              <i className="icon-gplus"></i>&nbsp; Sign in with Google
            </button>);
  }
}
