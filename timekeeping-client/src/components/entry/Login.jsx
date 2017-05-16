import React, { Component } from 'react';
import Input from './input.jsx';

import './reg-log.scss';

const validators = {
  email: () => {
    // return false;
  },
  password: () => {

  },
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        isValidEmail: true,
      },
      password: {
        isValidPassword: true,
      },
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  validatePassword(past, pass) {
    const isValidPassword = validators[past](pass);

    this.setState({
      [past]: { isValidPassword },
    });
  }

  validateEmail(name, value) {
    const isValidEmail = validators[name](value);
    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setState({
      [name]: { isValidEmail },
    });
  }



  render() {
    return (
      <main className="header-nav">
        <div className="head">
          <img
            src="./avatars/logo.jpg"
            width="30"
            height="20"
            alt="example-logo"
            className="logo"
          />
          <a className="logo" href="/">bear bell</a>

        </div>
        <form className="author-form">
          <fieldset>
            <legend>Authorization</legend>
            <Input
              name="email"
              // placeholder="Email"
              handleChangeEmail={this.validateEmail}
              isValidEmail={this.state.email.isValidEmail}

              past="password"
              handleChangePassword={this.validatePassword}
              isValidPassword={this.state.password.isValidPassword}
            />
            <input type="submit" value="Submit" />

            {/* <input
              type="password"
              name="password"
              placeholder="Password"
              // value={this.state.email}
              // onChange={this.handleUserInput}
            />
            <label htmlFor="remember">
              <input
                className="remember"
                type="checkbox"
              />
              Remember me
            </label>

            <button type="submit" className="author-button">Sign in</button> */}
          </fieldset>
        </form>
      </main>
    );
  }
}
