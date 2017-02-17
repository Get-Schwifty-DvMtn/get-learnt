import React, { Component } from 'react';
import { Link } from 'react-router';


import '../../much_flashy/MuchLogin.css';

class MuchLogin extends Component {

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
      <div className="much-login-holdz">
        <span>Username:</span> <input type="text" onChange={this.handleUsernameChange.bind(this)} />
        <span>Password:</span><input type="password" onChange={this.handlePasswordChange.bind(this)} />
        <Link to="home">
          <button onClick={this.handleSubmitLogin.bind(this)}>Submit</button>
        </Link>
        <button onClick={this.handleGoToLogin.bind(this)}>Cancel</button>
      </div>
    )
  }
}

export default MuchLogin;