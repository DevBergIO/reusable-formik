import React, { useCallback } from 'react';
import FormContainer from '../Form.container';
import { Login } from './Login';

export const LoginContainer = () => {
  const initialValues = {};
  const handleSubmit = useCallback((formData) => {
    console.log(formData);
  }, []);
  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={handleSubmit}
      component={Login}
    />
  );
};
