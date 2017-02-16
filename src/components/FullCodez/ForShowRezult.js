// this page is going to mimic the console like the right side of repl.it

import React, {Component} from 'react';

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
        test rezults
      </div>
    )
  }
}

export default ForShowRezult;