import { Link } from 'react-router-dom'
import './notFound.css'

export function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <Link to="/"> home</Link>
        </div>
    )
}