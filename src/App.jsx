import Favorites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="box-border flex w-full flex-1 flex-col p-4 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;