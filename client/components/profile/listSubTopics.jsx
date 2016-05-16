import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import SubTopic from '/client/components/profile/subTopic.jsx'

export default class ListSubTopics extends TrackerReact(Component) {

  getSubTopics(){
    return this.props.listSubTopics;
  }
  render(){
    let subtopics = this.getSubTopics();
    return(
      <main>
        <div className="container">
          <div className="row">
              <div id="color-usage" className="section scrollspy center">
                {subtopics.map((subtopic) =>{
                    return <SubTopic key={subtopic._id} subtopic={subtopic}/>
                })}
              </div>
          </div>
      </div>
    </main>
    );
  }
}
