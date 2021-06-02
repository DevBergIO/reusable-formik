import { Field, Form, Formik } from 'formik';
import React from 'react';

export const SignUp = () => (
  <div>
    <h1>Sign Up</h1>
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" />
      <label htmlFor="firstName">middleName</label>
      <Field id="middleName" name="middleName" placeholder="middle" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      />
      <button type="submit">Submit</button>
    </Form>
  </div>
);
