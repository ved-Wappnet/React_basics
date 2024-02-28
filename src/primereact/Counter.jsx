import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";

import { Toast } from "primereact/toast";

const Counter = () => {
  const [count, setcount] = useState(0);
  const [message, setmessage] = useState("");

  let toast = useRef(null);

  const greet = (e) => {
    e.preventDefault()
    toast.current.show({severity:'success', summary: 'Success', detail:message, life: 3000});
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="col-4">
          <Card className="m-3 shadow-5 bg-gray-300">
            <h3 className="text-4xl mb-4">{count}</h3>
            <Button
              label={"Increment"}
              className="p-button-success bg-green-500 p-2 rounded mr-2"
              onClick={() => setcount(count + 1)}
            />
            <Button
              label={"Decrement"}
              className="p-button-warning bg-yellow-500 p-2 rounded"
              onClick={() => setcount(count - 1)}
            />
          </Card>

          <Card className="m-3 shadow-5 bg-gray-300">
            <form className="flex">
              <InputText
                placeholder={"Message"}
                className="w-56 mr-2"
                onChange={(e) => setmessage(e.target.value)}
              />
              <Button
                label="Greet"
                className="p-button-success bg-green-400 p-2 rounded"
                onClick={greet}
              />
            </form>
          </Card>
          <Toast ref={toast} />
        </div>
      </div>
    </>
  );
};

export default Counter;
