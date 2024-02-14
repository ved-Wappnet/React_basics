import "./App.css";
import Blog from "./ES6/Blog";
import Car from "./ES6/Car";
import Conditional from "./ES6/Conditional";
import Destructuring from "./ES6/Destructuring";
import Mapmethod from "./ES6/Map";
import Model from "./ES6/Model";
import Formikform from "./Formikform";
import NormalForm from "./Forms/NormalForm";
import UserRegistration from "./UseForm+Yup/UserRegistration";
import Useform from "./Useform";

function App() {
  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  return (
    <div className="App">
      {/* <Car brand="Ford" />
      <Model brand="Ford" model="mustang" />
      <Mapmethod />
      <Destructuring />
      <Useform />
      <Formikform/> */}
      {/* <Conditional/> */}
      {/* <Blog posts={posts}/> */}
      <NormalForm />
      {/* <div style={{ width: "900px", margin: "50px auto" }}>
        <UserRegistration />
      </div> */}
    </div>
  );
}

export default App;
