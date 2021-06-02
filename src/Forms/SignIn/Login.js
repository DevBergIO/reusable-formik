import { Field, Form } from 'formik';
import React from 'react';

export const Login = () => (
  <div>
    <h1>Login</h1>
    <Form>

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      />

      <label htmlFor="email">Password</label>
      <Field
        id="password"
        name="password"
        placeholder="password"
        type="password"
      />
      <button type="submit">Submit</button>
    </Form>
  </div>
);
