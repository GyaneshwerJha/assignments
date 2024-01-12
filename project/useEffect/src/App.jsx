/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <div>
      {todos.map((t) => (
        <Todo key={t.id}  title={t.title} description={t.description} />
      ))}
    </div>
  );
};

const Todo = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default App;
