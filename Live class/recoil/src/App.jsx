/* eslint-disable react/prop-types */
// define the context {in a separate folder or file}
// provide the context
// use the context
import {
  useRecoilValue,
  useRecoilState,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/countAtom";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        {/* <Count /> */}
        <Todo/>
      </RecoilRoot>
    </div>
  );
};

const Todo = () => {
  return <div>
    <input type="text" placeholder="Task..." />
    <input type="text" placeholder="Description..."/>
    <button>Add Todo</button>
  </div>
}

const CountRenderer = () => {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector)
  return (
    <div>
      {count}
      <br />
      {isEven ? "It is even" : ""}
    </div>
  );
};

const Count = () => {
  console.log("count-rerender");
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
};

const Button = () => {
  // const [count, setCount] = useRecoilState(countAtom);
  console.log("button re-render");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
