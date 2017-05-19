import React from 'react';
import Validation from 'react-validation';


const Login = () => (
  <form className="author-form">
    <fieldset className="fieldLogin">
      <legend>Log in</legend>
      <Validation.components.Form className="formLogin">
        <div>
          <label htmlFor="email" className="groups">
            Email*
            <Validation.components.Input className="loginEmail" value="email@email.com" name="email" validations={['required', 'email']} />
          </label>
          <label htmlFor="password" className="groups">
            Password*
            <Validation.components.Input className="loginPassword" type="password" value="" name="password" validations={['required']} />
          </label>
        </div>
        <div>
          <form action="/pm">
            <Validation.components.Button className="buttonLog">Submit</Validation.components.Button>
          </form>
        </div>
      </Validation.components.Form>
    </fieldset>
  </form>
);
export default Login;
