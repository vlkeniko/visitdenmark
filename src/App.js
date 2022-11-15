import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/ExplorePage";
import PlayPage from "./pages/PlayPage";
import DiscountPage from "./pages/DiscountPage";
import InfoPage from "./pages/InfoPage";
import ScannerPage from "./pages/ScannerPage";
import PlayFamily from "./pages/playpages/PlayFamily";
import PlayNightlife from "./pages/playpages/PlayNightlife";
import PlayCulture from "./pages/playpages/PlayCulture";
import PlayNature from "./pages/playpages/PlayNature";
import Elements from "./components/Elements";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/discount" element={<DiscountPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/scanner" element={<ScannerPage />} />
        <Route path="/playfamily" element={<PlayFamily />} />
        <Route path="/playnightlife" element={<PlayNightlife />} />
        <Route path="/playculture" element={<PlayCulture />} />
        <Route path="/playnature" element={<PlayNature />} />
        <Route path="/categories/:categoryid/:subcategoryid" element={<Elements />} />
      </Routes>
    </div>
  );
}
