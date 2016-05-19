import React, {Component} from 'react';
import ListSubTopics from '/client/components/profile/listSubTopics.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Topic extends TrackerReact(Component) {
  constructor(props){
    super(props);
    this.getSubTopics = this.getSubTopics.bind(this)
  }

  getSubTopics(){
    Session.set('list_subtopics',this.props.topic.subtopics);
    FlowRouter.go('subtopics');
  };
  render(){
    return(
      <div className="col l4 m4 s12">
          <img className="topic-container" src ={this.props.topic.image} onClick={this.getSubTopics}/>
      </div>

    );
  }
}
