import React from "react";
import { useFormik } from "formik";

function Formikform() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues, // Corrected typo here
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">First name: </label>
        <input
          type="text"
          name="firstname"
          value={values.firstname}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last name: </label>
        <input
          type="text"
          name="lastname"
          value={values.lastname}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <label htmlFor="email">email: </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <label htmlFor="password">password: </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <input type="submit" value="Login!" />
      </div>
    </form>
  );
}

export default Formikform;
