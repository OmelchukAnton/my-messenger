import React from 'react';
import Validation from 'react-validation';
import validator from 'validator';
// import Validation from './../../../node_modules/react-validation/lib/build/validation.js';
// import { rules, Form, Input, Select, Textarea, Button } from
 // './../../../node_modules/react-validation/lib/build/validation.js';

Object.assign(Validation.rules, {

  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">Required</span>,
  },

  email: {
    rule: value => validator.isEmail(value),
    hint: value => <span className="form-error is-visible">{value} is not an Email.</span>,
  },

  password: {
    rule: (value, components) => {
      const password = components.password.state;
      const passwordConfirm = components.passwordConfirm.state;
      const isBothUsed = password
        && passwordConfirm
        && password.isUsed
        && passwordConfirm.isUsed;
      const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

      if (!isBothUsed || !isBothChanged) {
        return true;
      }

      return password.value === passwordConfirm.value;
    },
    hint: () => <span className="form-error is-visible">Passwords should be equal.</span>,
    api: {
      hint: value => (
        <button
          className="form-error is-visible"
        >
          API Error on {value} value. Focus to hide.
        </button>
      ),
    },
  },
});
