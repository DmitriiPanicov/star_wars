import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import CurrentCard from "./pages/CurrentCard/CurrentCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/card/:id" element={<CurrentCard />}/>
      </Routes>
    </>
  );
}

export default App;