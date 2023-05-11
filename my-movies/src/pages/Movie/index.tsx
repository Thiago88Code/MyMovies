import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import swal from 'sweetalert'
import { IMovie } from "../Home"
import { TmdbService } from "../../services/tmdb"
import { Loading } from "../../components/Loading"
import { MovieInfo } from "../../components/MovieInfo"

export function Movie() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [movie, setMovie] = useState<IMovie>()
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {

        TmdbService.getById(id)
            .then((response) => {
                setMovie(response.data)

            })
            .catch(() => {
                navigate("/", { replace: true })
                return;
            })

        setLoading(false)
    }, [navigate, id])

    const saveMovie = () => {
        if (movie) {
            let myList: any = localStorage.getItem("@myList");
            const savedMovies = JSON.parse(myList) || []
            savedMovies.map((i: any) => i)
            const hasMovie = savedMovies.some((i: any) => i.id === movie.id)

            if (hasMovie) {
                swal({
                    title: "Impossible to save this movie",
                    text: "this movie has already been saved!",
                    icon: "error",
                    closeOnEsc: true,
                    timer: 2000,

                });
            } else {
                savedMovies.push(movie)
                localStorage.setItem("@myList", JSON.stringify(savedMovies))
                swal({
                    title: "Saved successfully",
                    text: "Saved as favorite!",
                    icon: "success",
                    closeOnEsc: true,
                    timer: 2000,
                });
            }
        }
    }

    { loading && <Loading /> }

    if (movie) {
        return (

            <MovieInfo
                title={movie.title}
                onClick={saveMovie}
                overview={movie.overview}
                backdrop_path={movie.backdrop_path}
                vote_average={movie.vote_average}
            />

        )

    }
}
