import React, {Component} from 'react';
import ListSubTopics from '/client/components/profile/listSubTopics.jsx'

export default class Topic extends Component {
  constructor(props){
    super(props);
    this.getSubTopics = this.getSubTopics.bind(this)
  }

  getSubTopics(){
    LIST_SUBTOPICS = this.props.topic.subtopics;
    /*Meteor.user.update({_id:Meteor.userId()},{$set:{''}});*/
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
