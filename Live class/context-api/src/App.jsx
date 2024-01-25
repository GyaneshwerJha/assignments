/* eslint-disable react/prop-types */
// define the context {in a separate folder or file}
// provide the context
// use the context

import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

const CountRenderer = () => {
  const count = useContext(CountContext);
  return <div>{count}</div>;
};

const Count = ({ setCount }) => {
  console.log("count-rerender")
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
};

const Button = ({ setCount }) => {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
