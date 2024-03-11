import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  console.log(param);
  return (
    <div className="mt-8 flex justify-center items-center">
      I am {param.username}
    </div>
  );
};

export default User;
