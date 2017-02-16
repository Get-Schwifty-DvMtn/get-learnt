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
        <div className="doge_logo_holds">
          <Link to="/" className="doge_logo_link">
            <img src={require('../../img/MultiDoge.png')} alt="Doge Logo" className="doge_logo_img" />
          </Link>
          <p className="doge-logo-writespeak"><strong>Doge Learn How Codez</strong></p>
        </div>
        <nav className="wow_such_nav_bar">
          <Link className="wow_such_nav_link" to="/">Home</Link>
          <Link className="wow_such_nav_link" to="wow">ShortCodez</Link>
          <Link className="wow_such_nav_link" to="muchcode">FullCodez</Link>
        </nav>
      </div>
    )
  }
}

export default VeryHeader;