import { Link } from 'react-router-dom'
import './movielist.css'

export interface IMovieList {
    id?: number
    title: string
    overview?: string
    vote_average?: string
    poster_path?: string
    backdrop_path?: string

}

export const MovieList: React.FC<IMovieList> = ({ id, title, poster_path }) => {
    return (
        <div className='movie-list'>
            <article>
                <strong>{title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
                <Link to={`/movie/${id}`}>Go to Movie</Link>
            </article>
        </div>

    )
}