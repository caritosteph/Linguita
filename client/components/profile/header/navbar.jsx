import React,{Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Navbar extends TrackerReact(Component){
  render(){
    return (
      <nav className="default_color">
        <div className="container">
          <a className="text_h2">Interests</a>
        </div>
      </nav>
    );
  }
}
