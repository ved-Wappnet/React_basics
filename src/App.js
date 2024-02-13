import "./App.css";
import Car from "./ES6/Car";
import Destructuring from "./ES6/Destructuring";
import Mapmethod from "./ES6/Map";
import Model from "./ES6/Model";

function App() {
  return (
    <div className="App">
      <Car brand="Ford" />
      <Model brand="Ford" model="mustang" />
      <Mapmethod />
      <Destructuring />
    </div>
  );
}

export default App;
