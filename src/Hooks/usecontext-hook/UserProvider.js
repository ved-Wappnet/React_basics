import React, { createContext } from "react";

const UserContext = createContext(null);

const UserProvider = (props) => {
  const { children } = props;
  const user = {
    name: "Ved",
    email: "ved31@gmail.com",
    avatar: "https://www.gravater.com/avatar/anything",
  };

  return (
    <>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </>
  );
};

export { UserProvider, UserContext };
