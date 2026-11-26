import { Routes, Route } from "react-router";
import "./reset.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Fiche from "./components/Fiche";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pizzas/:id" element={<Fiche />}></Route>
      </Routes>
    </>
  );
}

export default App;
