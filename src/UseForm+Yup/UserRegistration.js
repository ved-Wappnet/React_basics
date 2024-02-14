import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const GENDER_OPTION = [
  { text: "Male", value: "male" },
  { text: "Female", value: "female" },
  { text: "Other", value: "other" },
];

const schema = yup
  .object({
    firstName: yup.string().required("FirstName is Required"),
    lastName: yup.string().required("LastName is Required"),
    email: yup
      .string()
      .email("Email must be Valid")
      .required(" Email is Required"),
    phone: yup.string().required("Phone number is Required"),
    gender: yup.string().required("Gender is required"),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "This password must be six character"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is Required")
      .min(6, "This Confirm password must be six character")
      .oneOf([yup.ref("password")], "Your password does not match"),
  })
  .required();

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>UserRegistration Form</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span className="error">{errors.firstName.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" {...register("lastName")} />
        {errors.lastName && (
          <span className="error">{errors.lastName.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" {...register("email")} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone No.</label>
        <input type="number" className="form-control" {...register("phone")} />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select className="form-control" {...register("gender")}>
          <option value="">Select Gender</option>
          {GENDER_OPTION.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {errors.gender && (
          <span className="error">{errors.gender.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">PassWord</label>
        <input
          type="password"
          className="form-control"
          {...register("password")}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm PassWord</label>
        <input
          type="password"
          className="form-control"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default UserRegistration;
