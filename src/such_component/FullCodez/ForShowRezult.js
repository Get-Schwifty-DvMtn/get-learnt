// this page is going to mimic the console like the right side of repl.it

import React, { Component } from 'react';

//much_flashy
import '../../much_flashy/ForShowRezult.css';

class ForShowRezult extends Component {

  constructor(props) {
    super(props);

    this.state = {
      testConnection: ''
    };
  }

  render() {
    return (
      <div className="plz-hold for-show-wrapper">
        <div className="wow_divider"></div>
        <div className="test_wow">
        </div>
      </div>
    )
  }
}

export default ForShowRezult;