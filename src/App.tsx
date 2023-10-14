import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import CurrentCard from "./pages/CurrentCard/CurrentCard";

import "./scss/app.scss";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<CurrentCard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
