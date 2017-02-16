import React, { Component } from 'react';

import MakeAskQuestion from './MakeAskQuestion.js';
import WowSuchAnswer from './WowSuchAnswer.js';


class ShortCodez extends Component {

  constructor(props) {
    super(props);

    this.state = {
      testConnection: ''
    };
  }

  render() {
    return (
      <div className="plz-hold short-codez-wrapper">
        <div className="moar-qs">
          <MakeAskQuestion />
        </div>
        <div className="answer-place">
          <WowSuchAnswer />
        </div>
      </div>
    )
  }
}

export default ShortCodez;