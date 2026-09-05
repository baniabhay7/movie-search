import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="box-border w-full py-4 sm:py-8">
      <form onSubmit={handleSearch} className="mx-auto mb-4 flex max-w-[600px] gap-4 box-border px-4 sm:mb-8">
        <input
          type="text"
          placeholder="Search for movies..."
          className="min-w-0 flex-1 rounded bg-[#333] p-3 px-4 text-base text-white focus:outline-none focus:ring-2 focus:ring-[#666]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="whitespace-nowrap rounded bg-[#e50914] px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#f40612]">
          Search
        </button>
      </form>

        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 box-border p-4 *:animate-[fadeIn_0.3s_ease-out_forwards]">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;