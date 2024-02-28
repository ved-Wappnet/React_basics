import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  console.log(param);
  return <div>I am {param.username}</div>;
};

export default User;
