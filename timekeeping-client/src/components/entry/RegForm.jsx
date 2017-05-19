import React, { Component } from 'react';
import Login from './Login.jsx';
import RegAcc from './RegAcc.jsx';
import Valid from './Valid.jsx';

export default class RegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }


  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <div className="head">
          <img
            src="./avatars/logo.jpg"
            width="30"
            height="20"
            alt="example-logo"
            className="logo"
          />
          <a className="logo" href="/">timekeeping</a>
          {button}

        </div>
        <div className="reg-info">
          <Greeting isLoggedIn={isLoggedIn} />
        </div>
      </div>
    );
  }
}

function OpenRegAccount() {
  return <RegAcc />;
}

function OpenLoginForm() {
  return <Login />;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <OpenRegAccount />;
  }
  return <OpenLoginForm />;
}

function LoginButton(props) {
  return (
    <button className="button-reg" onClick={props.onClick}>
      Sign up!
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="button-log" onClick={props.onClick}>
      Sign in!
    </button>
  );
}

LogoutButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};
LoginButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};
Greeting.propTypes = {
  isLoggedIn: React.PropTypes.bool,
};
