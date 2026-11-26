import { Routes, Route } from "react-router";
import "./reset.css";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
