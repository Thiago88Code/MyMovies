import { Link } from 'react-router-dom'
import './header.css'

export function Header() {
    return (
        <header>
            <Link className="logo" to="/">MyMovies</Link>
            <Link className="myFavorites-header" to="/favorites">My Favorites</Link>
        </header>
    )
}