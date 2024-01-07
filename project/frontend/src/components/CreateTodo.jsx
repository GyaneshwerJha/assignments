import styled from "styled-components";

const FormContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 200px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export const CreateTodo = () => {
  return (
    <>
      <FormContainer>
        <Input type="text" placeholder="Title" required />
        <br />
        <Input type="text" placeholder="Description" />
        <br />
        <Button>Add a todo</Button>
      </FormContainer>
    </>
  );
};
