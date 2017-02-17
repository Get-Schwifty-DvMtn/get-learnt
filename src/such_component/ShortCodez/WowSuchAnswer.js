import React, {Component} from 'react';

class WowSuchAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: '',
      lesson: '',
      question: 0
    }
  }

  render() {
    return (
      <div className="wow-such-answer-holdz plz-hold">
        <input type="text" className="enpoot"/>
      </div>
    )
  }

}

export default WowSuchAnswer;