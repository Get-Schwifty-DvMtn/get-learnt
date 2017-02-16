// this page is like the left side of repl.it, or an IDE where code can be entered for verification

// possible syntax highlighting text editor like thing
// https://github.com/ajaxorg/ace
// http://codemirror.net/index.html

import React, {Component} from 'react';

import '../../much_flashy/CodezForEnter.css';

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
        <textArea type="text" className="codez_words"></textArea>
      </div>
    )
  }
}

export default CodezForEnter;