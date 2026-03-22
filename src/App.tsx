import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import System from "./pages/System";
import Status from "./pages/Status";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/system" element={<System />} />
      <Route path="/status" element={<Status />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}