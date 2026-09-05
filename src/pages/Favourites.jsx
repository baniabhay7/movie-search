import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="box-border w-full p-8">
        <h2 className="mb-8 text-center text-[2.5rem] text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">Your Favorites</h2>
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 box-border p-4 *:animate-[fadeIn_0.3s_ease-out_forwards]">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto my-8 max-w-150 rounded-xl bg-white/5 p-16 px-8 text-center">
      <h2 className="mb-4 text-[2rem] text-[#e50914]">No Favorite Movies Yet</h2>
      <p className="text-[1.2rem] leading-[1.6] text-[#999]">Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;