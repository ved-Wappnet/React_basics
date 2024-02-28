import React from "react";

const Mapmethod = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];
  const user = [
    { name: "Alice", hobbies: ["Reading", "Painting"] },
    { name: "Bob", hobbies: ["Cooking", "Hiking"] },
    { name: "Charlie", hobbies: ["Gardening", "Photography"] },
  ];

  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const handleUserClick = (userId) => {
    console.log("User clicked:", userId);
  };

  return (
    <div>
      <h2>Map Method</h2>
      <ul>
        {names.map((name, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              {name}
            </li>
          );
        })}
      </ul>
      <div>
        {user.map((user) => (
          <div key={user.name}>
            <h2>{user.name}</h2>
            <ul>
              {user.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Tenary Oprator</h2>
      {names.includes("Bob") ? <p>its available</p> : <p>Not available</p>}

      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mapmethod;
