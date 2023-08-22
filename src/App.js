import Jobs from "./pages/Jobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:page?" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
