import React, { useState } from "react";
import { useFormik } from "formik";
import "./NormalForm.css";

const NormalForm = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    language: "",
    bio: "",
    agree: false,
    file: null,
    audio: null,
    video: null,
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileObjectURL, setFileObjectURL] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const objectURL = URL.createObjectURL(file);
    setFileObjectURL(objectURL);
  };

  
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your first name"
          value={values.firstname}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your last name"
          value={values.lastname}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          required
          minLength="8"
        />

        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={values.birthdate}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Select Language</label>
        <label>
          <input
            type="radio"
            name="language"
            value={values.language}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          JavaScript
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value={values.language}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          Python
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value={values.language}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          Java
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value={values.language}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          Ruby
        </label>

        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          placeholder="Tell us about yourself"
          value={values.bio}
          onBlur={handleBlur}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="agree">I agree to the terms and conditions:</label>
        <input type="checkbox" id="agree" name="agree" required />

        <label htmlFor="file">Upload PDF,XML,Audio,Video file:</label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".pdf,.xml,.mp3,.mp4"
          value={values.file}
          onBlur={handleBlur}
          onChange={handleFileChange}
          required
        />

        {/* <label for="audio">Upload Audio File:</label>
        <input
          type="file"
          id="audio"
          name="audio"
          accept=".mp3"
          value={values.audio}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />

        <label for="video">Upload Video File:</label>
        <input
          type="file"
          id="video"
          name="video"
          accept=".mp4"
          value={values.video}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        /> */}

        <input type="submit" value="Submit" />
      </form>

      {selectedFile && (
        <div>
          <h2>File Preview:</h2>
          <a href={fileObjectURL} target="_blank">
            Preview {selectedFile.name}
          </a>
        </div>
      )}
    </div>
  );
};

export default NormalForm;
