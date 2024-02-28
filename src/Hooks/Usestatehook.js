import React, { useState } from "react";

const Usestatehook = () => {
  const [text, setText] = useState("hello"); // 1

  const [liked, setliked] = useState(true); // 2

  const [name, setname] = useState("ved");
  const [age, setage] = useState(20);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChange2 = (e) => {
    setliked(e.target.checked);
  };

  const [form, setform] = useState({
    //3
    firstName: "Ved",
    lastName: "Panchal",
    email: "ved.wappnet@gmail.com",
  });

  const [person, setPerson] = useState({
    // 4
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }
  return (
    <div>
      {/* Example - 1 ==>  handletext */}
      {/* <h1>Intially value is {text}</h1>
      <input
        type="text"
        value={text}
        style={{ width: "400px", margin: "15px" }}
        onChange={handleChange}
      />{" "}
      <br />
      <button onClick={() => setText("hello")}>Reset</button> */}

      {/* Example - 2 ==>  handletext */}

      {/* <h1>CheckBox handle</h1>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange2} />
        like this
      </label>
      <p>you {liked ? "like" : "do not like "}this.</p> */}

      {/* Example - 3 ==> Form (two variables)  */}

      {/* <input
        type="text"
        value={name}
        style={{ width: "400px", margin: "15px" }}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={() => setage(age + 1)}>Increment age</button>
      <p>
        Hello {name} your age {age}
      </p> */}

      {/* Example - 4 ==> Form (object)   */}
      
      <label>
        <input
          type="text"
          style={{ width: "400px", margin: "15px" }}
          value={form.firstName}
          onChange={(e) => setform({ ...form, firstName: e.target.value })}
        />
      </label>
      <label>
        <input
          type="text"
          style={{ width: "400px", margin: "15px" }}
          value={form.lastName}
          onChange={(e) => setform({ ...form, lastName: e.target.value })}
        />
      </label>
      <label>
        <input
          type="text"
          style={{ width: "400px", margin: "15px" }}
          value={form.email}
          onChange={(e) => setform({ ...form, email: e.target.value })}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>

      {/* Example - 5 ==> Form (nested object)   */}

      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>

      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        style={{ width: "20%", height: "20%" }}
        alt={person.artwork.title}
      />

    </div>
  );
};

export default Usestatehook;
