import React from "react";
import { Form, Formik } from "formik";
import { SCHEMA_LOGIN } from "../../../utils/validateSchemas";
import styles from "./LogInForm.module.scss";
import InputInLabel from "../InputInLabel";
import { PropTypes } from 'prop-types';
const initialValues = {
  login: "",
  password: "",
};
const LogInForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SCHEMA_LOGIN}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <InputInLabel name="login" type="text" placeholder="login" />
            <InputInLabel name="password" type="password"/>
            <input type="submit" />
            <input type="reset" />
          </Form>
        );
      }}
    </Formik>
  );
};

LogInForm.propTypes = {
  onSubmit: PropTypes.func,
}
export default LogInForm;
