import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <CreateTodo />
      <Todo todos={todos} />
    </>
  );
};

export default App;
