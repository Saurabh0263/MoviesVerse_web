import {useEffect,useState} from "react";
import MovieCard from "./movieCard";
// f1056e9d
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=f1056e9d';

// const movie1={
//     "Title": "Spiderman and Grandma",
//     "Year": "2009",
//     "imdbID": "tt1433184",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
// }
    
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
            searchMovies("spiderman")
    }, []);
        return (
            <div className="app">
                <h1>MovieVerse</h1>
                <div className="search">
                    <input
                        placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                        
                    </input>
                    <img
                        src={searchIcon}
                        alt="search"
                        onClick={()=>searchMovies(searchTerm)}
                    ></img>
                </div>
                {
                    movies?.length > 0
                        ? (
                        <div className="container">
                                {movies.map((movie) => (
                                <MovieCard movie={movie}/>
                                )
                                )}
                        </div>  
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found </h2>
                        </div>      
                    )
                }
                
            </div>
        );
    }

export default App;