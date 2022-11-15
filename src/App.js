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
import FamilyTasks from "./pages/playtasks/FamilyTasks";
import NightLifeTasks from "./pages/playtasks/NightLifeTasks";
import CultureTasks from "./pages/playtasks/CultureTasks";
import NatureTasks from "./pages/playtasks/NatureTasks";
import Quiz from "./components/Quiz";
import Confirm from "./pages/Confirm";

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
        <Route path="/familytasks" element={<FamilyTasks />} />
        <Route path="/nightlifetasks" element={<NightLifeTasks />} />
        <Route path="/culturetasks" element={<CultureTasks />} />
        <Route path="/naturetasks" element={<NatureTasks />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/location" element={<Confirm />} />
        
      </Routes>
    </div>
  );
}
