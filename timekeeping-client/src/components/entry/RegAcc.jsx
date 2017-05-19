import React from 'react';
import Validation from 'react-validation';


const RegAcc = () => (
  <main className="regContent">
    <h3 className="hReg">Registration</h3>
    <Validation.components.Form>
      <div className="reg-form">
        <div className="column1">
          <label htmlFor="firstname" className="groups">
            Firstname*
            <Validation.components.Input
              className="inputGroupReg"
              errorClassName="is-invalid-input"
              type="text"
              containerClassName=""
              value=""
              name="firstname"
              validations={['required', 'alpha']}
            />
          </label>
          <label htmlFor="lastname" className="groups">
            Lastname*
            <Validation.components.Input
              className="inputGroupReg"
              errorClassName="is-invalid-input"
              type="text"
              containerClassName=""
              value=""
              name="lastname"
              validations={['required', 'alpha']}
            />
          </label>
          <label htmlFor="city" className="groups">
            City*
            <Validation.components.Select
              className="inputGroupReg"
              errorClassName="is-invalid-input"
              name="city"
              value=""
              validations={['required']}
            >
              <option value="">Choose your city</option>
              <option value="1">Brest</option>
              <option value="2">Minsk</option>
              <option value="3">New York</option>
            </Validation.components.Select>
          </label>
        </div>
        <div>
          <label htmlFor="email" className="groups">
            Email*
            <Validation.components.Input
              className="inputGroupReg"
              value="email@email.com"
              name="email"
              validations={['required', 'email']}
            />
          </label>
          <label htmlFor="password" className="groups">
            Password*
            <Validation.components.Input
              className="inputGroupReg"
              type="password"
              value=""
              name="password"
              validations={['required']}
            />
          </label>
          <label htmlFor="confirm" className="groups">
            Confirm password*
            <Validation.components.Input
              className="inputGroupReg"
              type="password"
              errorClassName="is-invalid-input"
              containerClassName=""
              value=""
              name="passwordConfirm"
              validations={['required', 'password']}
            />
          </label>
        </div>
      </div>
      <form action="/pm" className="buttonReg">
        <Validation.components.Button>Submit</Validation.components.Button>
      </form>
    </Validation.components.Form>
  </main>
);
export default RegAcc;
