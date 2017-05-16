import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      pass: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }
// onchange event
  handleUserInput(event) {
    const value = event.target.value;

    this.setState({
      value,
    });

    this.props.handleChangeEmail(this.props.name, value);
  }

  handlePasswordInput(event) {
    const pass = event.target.pass;

    this.setState({
      pass,
    });

    this.props.handleChangePassword(this.props.past, pass);
  }

  // validationEmail (value) {
  //   const r =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return r.test(value);
  // }

  render() {
    return (
      <div>
        <div>
          <input
            type="email"
            name={this.props.name}
            placeholder="Email"
            value={this.state.value}
            onChange={this.handleUserInput}
          />
          { this.props.isValidEmail ? '1' : '2' }
        </div>
        <div>
          <input
            type="password"
            name={this.props.past}
            placeholder="Password"
            value={this.state.pass}
            onChange={this.handlePasswordInput}
          />
          { this.props.isValidPassword ? '3' : '4' }
        </div>
      </div>
    );
  }
}
Input.propTypes = {
  name: React.PropTypes.string,
  past: React.PropTypes.string,
  isValidEmail: React.PropTypes.bool,
  isValidPassword: React.PropTypes.bool,
  handleChangeEmail: React.PropTypes.func.isRequired,
  handleChangePassword: React.PropTypes.func.isRequired,
};
Input.defaultProps = {
  name: '',
  past: '',
  placeholder: '',
  isValidPassword: '',
  isValidEmail: '',
};
