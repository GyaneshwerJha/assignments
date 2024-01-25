/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} />
      <Button count={count} setCount={setCount} />
    </div>
  );
};

const Count = ({ count }) => {
  return <div>{count}</div>;
};

const Button = ({ count, setCount }) => {
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
