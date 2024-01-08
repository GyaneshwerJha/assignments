import React, { useState, useEffect } from "react";
import axios from "axios";
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [id]);

  return <div>
    <h1>{id}</h1>
    <h1>{todo.title}</h1>
    <h1>{todo.description}</h1>
  </div>;
}

function App() {
  const [id, setId] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setId(1);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setId(4);
        }}
      >
        4
      </button>

      <Todo id={id} />
    </div>
  );
}

export default App;
