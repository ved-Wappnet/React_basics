import React, { useState } from "react";

const Conditional = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(2);
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {/* {loggedIn ? <h2>Welcome Ved</h2> : <h2>Welcome Guest</h2>} normal If-else condition */}
      {loggedIn===1?<h2>Welcome User 1</h2> : loggedIn === 2 ? <h2>Welcome User 2</h2> : <h2>Welcome User 3</h2>}
    </div>
  );
};

export default Conditional;
