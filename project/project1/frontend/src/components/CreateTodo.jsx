import { useState } from "react";
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <FormContainer>
        <Input
          type="text"
          placeholder="Title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <Input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <Button
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then(async (res) => {
              const json = await res.json();
              alert("Todo added");
            });
          }}
        >
          Add a todo
        </Button>
      </FormContainer>
    </>
  );
};
