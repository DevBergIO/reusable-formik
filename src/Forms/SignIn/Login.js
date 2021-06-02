import {Field, Form, Formik} from "formik";
import React from 'react'

export const SignIn = () => (
    <div>
        <h1>Sign In</h1>
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