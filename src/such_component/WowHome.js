import React, { Component } from 'react';
import { Link } from 'react-router';
import TypeWriter from 'react-typewriter';

import '../much_flashy/WowHome.css';

class WowHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: 'Doug'
      }
    };
  }

  render() {
    return (
      <div className="wow-home-holdz plz-holdz">
        <TypeWriter typing={1} className="such-amaze-type">
          <h1 className="big-words">Welcome, {this.state.user.username} </h1>
          <h4 className="small-words no-margin"> Would you like to </h4>
          <h4 className="small-words no-margin spaced-words">
            <Link className="links" to="blog">Learn</Link> 
            <p className="spaced">or</p> 
            <Link className="links" to="wow">Practice</Link>?
          </h4>
        </TypeWriter>
      </div>
    )
  }
}
export default WowHome;