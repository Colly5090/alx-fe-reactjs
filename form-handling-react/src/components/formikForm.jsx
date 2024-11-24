import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email Address is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />

          <Field type="email" name="email" placeholder="Email Address" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" placeholder="Password"/>
          <ErrorMessage name="password" component="div" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
