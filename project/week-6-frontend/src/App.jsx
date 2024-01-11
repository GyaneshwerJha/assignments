/* eslint-disable react/prop-types */
import { useState } from "react";

const Header = (props) => {
  const [title, setTitle] = useState(props.titile);

  return (
    <>
      <button onClick={() => {
        setTitle(Math.random())
      }}>Update the title</button>
      <h1>{title}</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <Header titile="Title 1" />
      <Header titile="Title 1" />
    </>
  );
};

export default App;
