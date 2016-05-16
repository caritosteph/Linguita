import React, {Component} from 'react';
import ListSubTopics from '/client/components/profile/listSubTopics.jsx'

export default class Topic extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSubTopics: false
    }
    this.getSubTopics = this.getSubTopics.bind(this)
  }

  getSubTopics(){
    this.setState({
      showSubTopics: true
    });
  };
  render(){
    return(
      <div className="col l4 m4 s12">
            {this.state.showSubTopics ?
                <ListSubTopics listSubTopics={this.props.topic.subtopics}/> :
                <img className="topic-container" src ={this.props.topic.image} onClick={this.getSubTopics}/>
            }
      </div>

    );
  }
}
