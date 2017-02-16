import React, { Component } from 'react';

class VeryHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testHeaders: 'stuffssfs'
    };
  }

  render() {
    return (
      <div className="very-header-container">
        <div>
          {this.state.testHeaders}
        </div>
      </div>
    )
  }
}

export default VeryHeader;