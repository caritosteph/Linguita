import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Topic from '/client/components/profile/topic.jsx';

export default class ListTopics extends TrackerReact(Component) {
  getTopics(){
    return Topics.find().fetch();
  }
  render(){
    let topics = this.getTopics();
    return(
      <div>
        <h5 class="col s12 m3">Choose your topics: </h5>
        <div className="center">
            {topics.map((topic) =>{
              return <Topic key={topic._id} topic={topic}/>
            })}
        </div>
      </div>
    );
  }
}
