import { Formik } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({
  initialValues,
  onSubmit,
  component: Component,
  validateOnBlur,
  validateOnChange,
  validateOnMount,
  enableReinitialize,
  resetForm,
  innerRef,
  ...props
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    enableReinitialize={enableReinitialize}
    validateOnBlur={validateOnBlur}
    validateOnChange={validateOnChange}
    validateOnMount={validateOnMount}
    resetForm={resetForm}
    innerRef={innerRef}
  >
    {(formikProps) => (
      <Component
        {...formikProps}
        {...props}
      />
    )}
  </Formik>
);
FormContainer.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  initialValues: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
  enableReinitialize: PropTypes.bool,
  validateOnBlur: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  validateOnMount: PropTypes.bool,
  resetForm: PropTypes.func,
  innerRef: PropTypes.node,
};
FormContainer.defaultProps = {
  enableReinitialize: false,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnMount: false,
  resetForm: null,
  innerRef: null,
};

export default FormContainer;
