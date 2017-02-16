import React, {Component} from 'react';

//my files
import CodezForEnter from './CodezForEnter';
import ForShowRezult from './ForShowRezult';
// import ShortCodez from './ShortCodez';

// my css
import '../../much_flashy/FullCodez_Index.css';

class FullCodezIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testConnection: ''
    };
  }

  render() {
    return (
      <div className="plz-hold full-codez-wrapper">
        <CodezForEnter />
        <ForShowRezult />
      </div>
    )
  }


}

export default FullCodezIndex;