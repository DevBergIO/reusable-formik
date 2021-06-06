/* eslint-disable */
import { Formik } from 'formik';
import React from 'react';

export const FormContainer = ({
  initialValues,
  onSubmit,
  component: Component,
  ...props
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
  >
    {(formikProps) => (
      <Component
        {...formikProps}
        {...props}
      />
    )}
  </Formik>
);
