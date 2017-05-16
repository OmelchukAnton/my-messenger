import React, { Component } from 'react';

export default class RegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: "",
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
      <div className="reg-info">
        Are you in our first? <p> To create a new account, click </p>
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

function UserGreeting() {
  return (
    <form className="reg-form">
      <a>It is necessary to fill in blank fields </a>
      <fieldset>

        <div className="reg-form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="email"
            type="email"
            required
            placeholder="example@example.com"
            // value={this.state.email}
            // onChange={() => { console.log(1)}}
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="name">Username:</label>
          <input className="name" type="text" placeholder="Username" />
        </div>

        <div className="reg-form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="password"
            type="password"
            placeholder="A-z, 1-9"
            // value={this.state.password}
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="repeat-password"> Repeat password: </label>
          <input className="repeat-password" type="password" placeholder="Enter the password" />
        </div>

        <div className="reg-form-sex">
          <label htmlFor="sex">I am:</label>
          <input type="radio" name="dva" className="sex-lab1" />
          <label htmlFor="dva1">Male</label>
          <input type="radio" name="dva" className="sex-lab2" />
          <label htmlFor="dva2">Female</label>
        </div>

        <div className="reg-form-option">
          <label htmlFor="state">State:</label>
          <select className="state">
            <option>Belarus</option>
            <option>Russia</option>
            <option>Other..</option>
          </select>
        </div>
        {/* <button type="submit" className="reg-button">
          Create an account.
        </button> */}
        <form action="/pm">
          <button className="reg-button">Create an account.</button>
        </form>
      </fieldset>
    </form>
  );
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button className="button-reg" onClick={props.onClick}>
      REGISTRATION!
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="button-close" onClick={props.onClick}>
      Close up
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
