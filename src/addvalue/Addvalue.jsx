import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const Addvalue = () => {
  const [input, setInput] = useState([{ key: "", value: "" }]);

  const handleinput = (i, e) => {
    const values = [...input];
    values[i][e.target.name] = e.target.value;
    setInput(values);
  };

  const handleClick = () => {
    setInput([...input, { key: "", value: "" }]);
  };

  const handleRemoveField = (index) => {
    const values = [...input];
    values.splice(index, 1);
    setInput(values);
  };

  return (
    <div>
      <h1 className="text-center mt-24 font-medium text-2xl">Add values</h1>
      <div className="px-60 mt-20">
        {input.map((inputfield, i) => (
          <div key={i} className="flex gap-5 mt-4">
            <input
              type="text"
              placeholder="key"
              name="key"
              value={inputfield.key}
              onChange={(e) => handleinput(i, e)}
              className="focus:outline-none focus:border-purple-400"
            />
            <input
              type="text"
              placeholder="Value"
              name="value"
              value={inputfield.value}
              onChange={(e) => handleinput(i, e)}
              className="focus:outline-none focus:border-purple-400"
            />
            <button
              className="text-black font-medium rounded"
              onClick={(index) => handleRemoveField(index)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-purple-500 px-4 py-1 hover:bg-purple-700 text-white font-medium rounded"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
    // <div className="contact-form-holder flex">
    //   <h4 className="mr-2">Reach Out</h4>
    //   <div className="contact-form-small-rectangle flex">
    //     <div className="mr-1">
    //       <p>response</p>
    //       <p>response</p>
    //     </div>
    //     <div>
    //       <p>response</p>
    //       <p>response</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Addvalue;
