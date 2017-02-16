// this page is like the left side of repl.it, or an IDE where code can be entered for verification

import React, {Component} from 'react';

class CodezForEnter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      testConnection: ''
    };
  }

  render() {
    return (
      <div className="plz-hold codez-for-enter-wrapper">
        test codez
      </div>
    )
  }
}

export default CodezForEnter;