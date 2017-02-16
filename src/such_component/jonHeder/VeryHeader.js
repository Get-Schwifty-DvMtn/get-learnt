import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../much_flashy/VeryHeader.css';

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
        <nav className="wow_such_nav_bar">
          <div className="link-wrapper">
            <Link className="wow_such_nav_link" to="/">home</Link>
          </div>
          <div className="link-wrapper">
            <Link className="wow_such_nav_link" to="wow">short answer</Link>
          </div>
          <div className="link-wrapper">
            <Link className="wow_such_nav_link" to="muchcode">code</Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default VeryHeader;