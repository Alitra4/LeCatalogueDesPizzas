import { Routes, Route } from "react-router";
import "./reset.css";
import HomePage from "./components/HomePage";
import Fiche from "./components/Fiche";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizzas/:id" element={<Fiche />} />
      </Routes>
    </>
  );
}

export default App;
