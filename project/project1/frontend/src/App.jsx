import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <>
      <CreateTodo />
      <Todo todos={todos} />
    </>
  );
};

export default App;
