import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState("");

  let count = useMemo(() => {
    console.log("memo got called")
    let finalCount = 0;
    for(let i = 1; i <= input; i++){
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [input])

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>{`Sum is ${count}`}</p>
      <button
        onClick={() => {
          setCounter(parseInt(counter + 1));
        }}
      >{`Click ${counter}`}</button>
    </div>
  );
};

export default App;
