import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Home from "./pages/Home/Home";
import CurrentCard from "./pages/CurrentCard/CurrentCard";

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
