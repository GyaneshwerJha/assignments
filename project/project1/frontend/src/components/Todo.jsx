import styled from "styled-components";

const TodoItemContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const Heading1 = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
const Todo = ({ todos }) => {
  return (
    <>
      {todos.map(function (todo) {
        return (
          <>
            <TodoItemContainer>
              <Heading1>{todo.title}</Heading1>
              <Heading1>{todo.description}</Heading1>
              <Button>
                {todo.completed == true ? "Complted" : "Mark as Completed"}
              </Button>
            </TodoItemContainer>
          </>
        );
      })}
    </>
  );
};

export default Todo;
