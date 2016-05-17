import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class SubTopic extends TrackerReact(Component) {
  getSubTopics(){
    FlowRouter.go("partners");
  }
  render(){
    return(
      <div className="col l4 m4 s12">
        <div className="topic-container" >
          <img className="topic-container" src ={this.props.subtopic.image} onClick={this.getSubTopics.bind(this)}/>
        </div>
      </div>
    );
  }
}
