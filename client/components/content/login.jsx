import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component{
  onLogin(e){
    e.preventDefault();
    Meteor.loginWithGoogle({
        requestPermissions: ['email', 'profile'],
        requestOfflineToken: 'true'
    },function(err){
      if(err){
        alert('error : '+ err);
        throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
      }else{
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
