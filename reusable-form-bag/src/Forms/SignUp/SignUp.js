/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form } from 'formik';
import React from 'react';

export const SignUp = () => (
  <div>
    <h3 className="Main">Sign Up</h3>
    <Form>
      <div className="Form">
        <Field id="firstName" name="firstName" placeholder="Jane" />
      </div>
      <div className="Form">
        <Field id="lastName" name="lastName" placeholder="Doe" />
      </div>

      <div className="Form">
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
      </div>
      <div className="Form">
        <Field
          id="password"
          name="password"
          placeholder="password"
          type="password"
        />
      </div>
      <div className="Form">
        <button type="submit">Submit</button>
      </div>
    </Form>
  </div>
);
