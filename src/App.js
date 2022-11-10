import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/ExplorePage";
import PlayPage from "./pages/PlayPage";
import DiscountPage from "./pages/DiscountPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/discount" element={<DiscountPage />} />
      </Routes>
    </div>
  );
}
