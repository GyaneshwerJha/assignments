/* eslint-disable react/prop-types */
const App = () => {
  return (
    <div>
      <CardWrapper innerCompo={<TextComponent/>} />
    </div>
  );
};

const TextComponent = () => {
  return (
    <div>
      <h1>Hi There</h1>
    </div>
  );
};

const CardWrapper = ({innerCompo}) => {
  return <div style={{ border: "2px solid black" }}>{innerCompo}</div>;
};

export default App;
