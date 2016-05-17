import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import SubTopic from '/client/components/profile/subTopic.jsx';

export default class ListSubTopics extends TrackerReact(Component) {

  getSubTopics(){
    return LIST_SUBTOPICS;
  }
  render(){
    let subtopics = this.getSubTopics();
    return(
      <div>
        <h5 class="col s12 m3">Choose your sub-topics: </h5>
        <div className="center">
            {subtopics.map((subtopic) =>{
              return <SubTopic key={subtopic._id} subtopic={subtopic}/>
            })}
        </div>
      </div>
    );
  }
}
