import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const Navigation = () => {

  const user = useContext(UserContext);

  const { name, email, avatar } = user;

  return (
    <div>
      <p>Navigation</p>
      <img src={avatar} alt="avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Navigation;
