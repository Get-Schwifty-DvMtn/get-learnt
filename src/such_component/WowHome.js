import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';

import '../much_flashy/WowHome.css';

class WowHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: 'Doug'
    };
  }

  render() {
    return (
      <div className="wow-home-holdz plz-holdz">
        <TypeWriter typing={1} className="such-amaze-type">

            <h1>Welcome, {this.state.user} </h1> 
            <h4> Learn to code </h4>

        </TypeWriter>

        <span className="placeholder">
          <svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
        </span>
      </div>
    )
  }
}
export default WowHome;