import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  const factorial = (n) => {
    if (n == 0 || n == 1) {
      return n;
    }
    return n * factorial(n - 1);
  };
  const expensiveValue = useMemo(() => {
    return factorial(input)
  },[input])

  // Your solution ends here

  return (
    <div>
      <input
        type="number"
       
        placeholder="Enter the number"
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
