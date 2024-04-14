import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./component/Register/Register";
import GenrePage from "./pages/GenrePage/GenrePage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
