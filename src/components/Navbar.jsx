import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="flex items-center justify-between bg-black p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)] sm:px-8">
        <div className="text-[1.2rem] font-bold sm:text-2xl">
            <Link to="/">Movie App</Link>
        </div>
        <div className="flex gap-4 sm:gap-8">
            <Link to="/" className="rounded p-2 text-base transition-colors duration-200 hover:bg-white/10">Home</Link>
            <Link to="/favorites" className="rounded p-2 text-base transition-colors duration-200 hover:bg-white/10">Favorites</Link>
        </div>
    </nav>
}

export default NavBar