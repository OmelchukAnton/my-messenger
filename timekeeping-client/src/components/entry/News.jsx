import Validation from 'react-validation';
import React, { Component } from 'react';

// import Validation from './../../../node_modules/react-validation/lib/build/validation.js';

export default class Registration extends Component {
  render() {
    return (
      <Validation.components.Form>
        <h3>Registration</h3>
        <div>
          <label htmlFor="email">
            Email*
            <Validation.components.Input value="email@email.com" name="email" validations={['required', 'email']} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password*
            <Validation.components.Input type="password" value="" name="password" validations={['required']} />
          </label>
        </div>
        <div>
          <Validation.components.Button>Submit</Validation.components.Button>
        </div>
      </Validation.components.Form>
    );
  }
}
