import { Formik } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import AdminTable from '../Table/AdminTable';

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
  validationSchema,
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
    validationSchema={validationSchema}
  >
    {(formikProps) => (
      <>
        <Component
          {...formikProps}
          {...props}
        />
        <div style={{ padding: '1rem' }}>
          <AdminTable
            data={[{
              enableReinitialize,
              validateOnBlur,
              validateOnChange,
              validateOnMount,
              initialValues,
              values: formikProps.values,
            }]}
            showCheckBox={false}
          />
        </div>
      </>
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
  validationSchema: PropTypes.shape({}),
};
FormContainer.defaultProps = {
  enableReinitialize: false,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnMount: false,
  resetForm: null,
  innerRef: null,
  validationSchema: {},
};

export default FormContainer;
