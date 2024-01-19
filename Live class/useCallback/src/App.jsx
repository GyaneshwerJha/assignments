/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const logSomeThnig = useCallback(() => {
    console.log("child clicked");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={logSomeThnig} />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me{count}
      </button>
    </div>
  );
};

const ButtonComponent = ({ inputFunction }) => {
  console.log("child render");
  return (
    <div>
      <button onClick={inputFunction}>Button clicked</button>
    </div>
  );
};

export default App;
