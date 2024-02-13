import React from "react";

const Mapmethod = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];
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

      <h2>Tenary Oprator</h2>
      {names.includes("Bob") ? <p>its available</p> : <p>Not available</p>}
    </div>
  );
};

export default Mapmethod;
