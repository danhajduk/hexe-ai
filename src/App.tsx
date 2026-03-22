import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import System from "./pages/System";
import Status from "./pages/Status";
import Roadmap from "./pages/Roadmap";
import Docs from "./pages/Docs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/system" element={<System />} />
      <Route path="/status" element={<Status />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/docs/*" element={<Docs />} />
    </Routes>
  );
}