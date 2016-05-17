import React, {Component} from 'react';

export default class Partner extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col s12 m3">
          <div className="card card-avatar">
              <div className="waves-effect waves-block waves-light">
                  <img className="activator" src="./avatar1.png"/>
              </div>
              <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Flash <br/>
                  <small><a className="teal-text" href="#">CEO</a></small></span>
              </div>
          </div>
      </div>
    );
  }
}
