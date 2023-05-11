import { useState, useEffect } from 'react';
import { TmdbService } from '../../services/tmdb'
import { MovieList } from '../../components/MovieList'
import { Loading } from '../../components/Loading';

export interface IMovie {
    id: number
    title: string
    backdrop_path: string
    poster_path: string
    vote_average: string
    overview?: string

}

export function Home() {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        TmdbService.getAll()
            .then((response) => {
                setMovies(response.data.results)
            })
        setLoading(false)
    }, [])

    { loading && <Loading /> }

    return (

        <div>
            {movies.map((i) => {
                return (
                    <div key={i.id}>
                        <MovieList
                            id={i.id}
                            title={i.title}
                            poster_path={i.poster_path}
                        />
                    </div>
                )
            })}
        </div>
    )


    {/*<div className='container'>
            <div className='movie-list'>
                {loading}
                {movies.map((movie) => {
                    return (

                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>Go to Movie</Link>
                        </article>
                    )
                })}
            </div>
            </div>*/}


}