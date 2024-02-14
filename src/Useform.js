import { useForm } from "react-hook-form";

function Useform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  const onSubmit = () => {
    const formData = getValues();
    console.log(formData);
  };

  console.log("watch", watch());
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <input {...register("firstName")} placeholder="firstName" />
      <br />
      <input
        {...register("lastName", { required: true })}
        placeholder="lastName"
      />
      {errors.lastName && <p>LastName is required</p>}
      <br />
      <input {...register("age", { pattern: /\d+/ })} placeholder="Age" />
      {errors.age && <p>Please enter number for age</p>}
      <br />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <br />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}

export default Useform;
