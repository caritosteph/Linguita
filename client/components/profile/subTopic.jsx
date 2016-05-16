import React, {Component} from 'react';

export default class SubTopic extends Component {

  render(){
    return(
      <div className="col l4 m4 s12">
        <div className="topic-container" >
          <p>{this.props.subtopic.name}</p>
        </div>
      </div>
    );
  }
}
