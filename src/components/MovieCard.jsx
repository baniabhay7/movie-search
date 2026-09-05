import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-[#1a1a1a] transition-transform duration-200 hover:-translate-y-1.25 max-md:text-[0.9rem]">
        <div className="relative aspect-2/3 w-full">
            <img className="block h-full w-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-b from-black/10 to-black/80 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 p-2 text-2xl transition-colors duration-200 hover:bg-black/80 max-md:h-8 max-md:w-8 max-md:text-[1.2rem] ${favorite ? "text-red-500" : "text-white"}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
            <h3 className="m-0 text-base">{movie.title}</h3>
            <p className="text-[0.9rem] text-[#999]">{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard