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
  return React.createElement(
    Formik,
    {
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    },
    (props) =>
      React.createElement(
        Form,
        null,
        React.createElement(Field, {
          type: "text",
          name: "username",
          placeholder: "Username",
        }),
        React.createElement(ErrorMessage, {
          name: "username",
          component: "div",
        }),
        React.createElement(Field, {
          type: "email",
          name: "email",
          placeholder: "Email Address",
        }),
        React.createElement(ErrorMessage, {
          name: "email",
          component: "div",
        }),
        React.createElement(Field, {
          type: "password",
          name: "password",
          placeholder: "Password",
        }),
        React.createElement(ErrorMessage, {
          name: "password",
          component: "div",
        }),
        React.createElement(
          "button",
          {
            type: "submit",
          },
          "Submit"
        )
      )
  );
};

export default FormikForm;
