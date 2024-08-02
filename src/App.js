import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Work from "./Pages/Work";
import PocketPal from "./WorkPages/PocketPal";
import PerfectRecipe from "./WorkPages/PerfectRecipe";
import Resume from "./Pages/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pocket-pal" element={<PocketPal />} />
        <Route path="/perfect-recipe" element={<PerfectRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
