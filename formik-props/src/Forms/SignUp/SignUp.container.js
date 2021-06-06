import React, { useCallback } from 'react';
import FormContainer from '../Form.container';
import { SignUp } from './SignUp';

export const SignUpContainer = () => {
  const initialValues = {};
  const handleSubmit = useCallback((formData) => {
    console.log(formData);
  }, []);
  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={handleSubmit}
      component={SignUp}
    />
  );
};

SignUpContainer.propTypes = {

};
