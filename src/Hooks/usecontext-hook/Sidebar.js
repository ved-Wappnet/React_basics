import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const Sidebar = () => {
    
  const user = useContext(UserContext);
  const { name, avatar } = user;

  return (
    <div>
      <p>Sidebar</p>
      <img src={avatar} alt="avatar" />
      <h2>{name}</h2>
    </div>
  );
};

export default Sidebar;
