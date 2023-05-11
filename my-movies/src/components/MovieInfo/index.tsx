import { IMovieList } from '../MovieList'
import './movieInfo.css'

interface IMovieInfo extends IMovieList {
    onClick: () => void
}


export const MovieInfo: React.FC<IMovieInfo> = ({ title, overview, backdrop_path, vote_average, onClick }) => {
    return (
        <div className="movie-info">
            <h1>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
            <h3>Sinopse</h3>
            <span>{overview}</span>
            <strong> Avaliation: {vote_average} / 10</strong>
            <div className="area-button">
                <button onClick={onClick}>Save</button>
                <button>
                    <a href={`https://www.youtube.com/results?search_query=${title}+trailer`} target="blank" rel="external">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}