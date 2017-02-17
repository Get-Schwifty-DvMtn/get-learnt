import React, { Component } from 'react';
import { Link } from 'react-router';

//third party
import Typewriter from 'react-typewriter';
import Scrollchor from 'react-scrollchor';
//my components
// import WowHome from './WowHome';
// import MuchLogin from './MuchLogin';

//much_flashy
import '../../much_flashy/OohHowLogin.css';


class OohHowLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      showLogin: false,
      user: {
        username: '',
        password: ''
      }
    };
  }

  handleGoToLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  handleUsernameChange(event) {
    this.setState({
      user: {
        username: event.target.value
      }
    });

  }

  handlePasswordChange(event) {
    this.setState({
      user: {
        password: event.target.value
      }
    });
  }

  handleSubmitLogin(event) {
    if (this.state.user.username && this.state.user.password) {
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    return (
      <div className="ooh-how-login-holdz plz-holdz">
        {
          !this.state.showLogin ?
            <div className="ooh-how-login-holdz plz-holdz">
              <div className="login-wrapper">
                <Typewriter typing={1} className="such-amaze-type" >
                  <h1 className="big-words">Hey there big shoots</h1>
                  <p className="small-words">Why don't you go ahead and <a onClick={this.handleGoToLogin.bind(this)}>login?</a></p>
                  <p className="small-words no-margin"> ...     ...     ...     ...      Click here      ☝️️</p>
                </Typewriter>
                <Scrollchor to="#scrollDown" className="nav-link">
                  <span className="placeholder">
                    <svg className="arrows">
                      <path className="a1" d="M0 0 L30 32 L60 0"></path>
                      <path className="a2" d="M0 20 L30 52 L60 20"></path>
                      <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </span>
                </Scrollchor>
              </div>
              <div className="hugeDiv hugeDiv1">
                <div id="scrollDown"></div>
                make a trigger point here, that once this is scrolled into view, the next div (hidden) appear (to the right, so the next scroll is sideways).
                lazy loading?
                <div>Some content here</div>
                <img src="http://unsplash.it/300/?random" alt="unsplash.it random" />
                <div>More stuff here</div>
              </div>
              <div className="hugeDiv hugeDiv2" id="scrollDiv2">
              </div>
            </div>
            :
            <div className="much-login-holdz">
              <span>Username:</span> <input type="text" onChange={this.handleUsernameChange.bind(this)} />
              <span>Password:</span><input type="password" onChange={this.handlePasswordChange.bind(this)} />
              <Link to="home">
                <button onClick={this.handleSubmitLogin.bind(this)}>Submit</button>
              </Link>
              <button onClick={this.handleGoToLogin.bind(this)}>Cancel</button>
            </div>
        }
      </div>
    )
  }
}

export default OohHowLogin;


/*import React, { Component } from 'react';
// import { Link } from 'react-router';

//third party


//my components
// import WowHome from './WowHome';
import MuchLogin from './MuchLogin';
import SuchWelcome from './SuchWelcome';
//much_flashy
import '../../much_flashy/OohHowLogin.css';


class OohHowLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      showLogin: false,
      user: {
        username: '',
        password: ''
      }
    };
  }

  render() {
    return (
      <div className="ooh-how-login-holdz plz-holdz">
        {
          !this.props.showLogin ?
            <SuchWelcome />
            :
            <MuchLogin />
        }
      </div>
    )
  }
}

export default OohHowLogin;*/