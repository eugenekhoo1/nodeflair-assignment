import Jobs from "./pages/Jobs";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/:page?" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
