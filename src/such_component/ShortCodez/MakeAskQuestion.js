import React, {Component} from 'react';

class MakeAskQuestion extends Component {
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
      <div className="make-ask-queston-holdz plz-hold">
        Make Ask question here?:!
      </div>
    )
  }

}

export default MakeAskQuestion;