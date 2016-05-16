import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Topic from '/client/components/profile/topic.jsx'
export default class ListTopics extends TrackerReact(Component) {
  getTopics(){
    return Topics.find().fetch();
  }
  render(){
    let topics = this.getTopics();
    return(
      <main>
        <div className="container">
          <div className="row">
              <div id="color-usage" className="section scrollspy center">
                {topics.map((topic) =>{
                    return <Topic key={topic._id} topic={topic}/>
                })}
            </div>
          </div>
      </div>
    </main>
    );
  }
}
