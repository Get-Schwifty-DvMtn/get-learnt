import React, { Component } from 'react';

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
          <h3 className="big-mctitle moar-qs-title">Make ask questions for this space</h3>
        </div>
        <div className="answer-place">
          <input className="enpoot answer-place-enpoot" type="text" />
        </div>
      </div>
    )
  }
}

export default ShortCodez;