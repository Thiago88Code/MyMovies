import { useState, useEffect, useCallback } from 'react'
import './favorites.css'
import { IMovie } from '../Home'
import { Link } from 'react-router-dom'

export function Favorites() {

    const [favorites, setFavorites] = useState<IMovie[]>([])

    useEffect(() => {
        const loadFavorites = () => {
            let myList: any = localStorage.getItem("@myList");

            const savedMovies = JSON.parse(myList) || []
            setFavorites(savedMovies)
        }

        loadFavorites()

    }, [])

    const deleteMovie = useCallback((e: number) => {
        
        let newFavorites = favorites.filter((f) => {
            return f.id !== e
        })
        setFavorites(newFavorites)
        localStorage.setItem("@myList", JSON.stringify(newFavorites))

    }, [favorites])


    return (
        <div className="favorites">
            <h1>My Favorites</h1>
            <ul>
                {favorites.map((i) => {
                    return (
                        <li key={i.id}>
                            <span>{i.title}</span>
                            <div>
                                <Link to={`/movie/${i.id}`}>See Details</Link>
                                <button onClick={() => deleteMovie(i.id)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}