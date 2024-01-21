import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import React from "react";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazay(() => import("./components/Landing"));


const App = () => {
  return (
    <div>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
};

export default App;
