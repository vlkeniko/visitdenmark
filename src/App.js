import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OtherPage from "./pages/OtherPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </div>
  );
}
