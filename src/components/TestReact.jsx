import React, { useState } from "react";

const TestReact = () => {
  const [buttons, setButtons] = useState(["Button 1", "Button 2", "Button 3"]);
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleToggle = (button) => {
    if (selectedButtons.includes(button)) {
      setSelectedButtons(
        selectedButtons.filter((selectedButton) => selectedButton !== button)
      );
      setButtons([...buttons, button]);
    } else {
      setSelectedButtons([...selectedButtons, button]);
      setButtons(buttons.filter((btn) => btn !== button));
    }
  };

  return (
    <div>
      <div>
        <div
          style={{
            border: "1px solid black",
            height: "100px",
            width: "100%",
            margin: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {selectedButtons.map((button, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "red",
                padding: "12px",
                margin: "15px",
                borderRadius: "15px",
                color: "white",
                // width: "122px",
                // display: "flex",
                // flexDirection: "row",
              }}
            >
              {button}
              <button
                onClick={() => handleToggle(button)}
                style={{ marginLeft: "10px" }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleToggle(button)}
            style={{
              backgroundColor: "red",
              padding: "12px",
              margin: "15px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestReact;
