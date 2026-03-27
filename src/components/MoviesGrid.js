import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setGenre] = useState('All Genres');
    const [selectedRating, setRating] = useState('All Ratings');

    useEffect(() => {
        fetch('./movies.json')
        .then(res => res.json())
        .then(movies => setMovies(movies))
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const matchSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const matchGenre = (movie, selectedGenre) => {
        return selectedGenre === 'All Genres' || movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    }

    const matchRating = (movie, selectedRating) => {
        switch (selectedRating) {
            case 'All':
                return true;
            case 'Good':
                return movie.rating >= 8;
            case 'Ok':
                return movie.rating >= 5 && movie.rating < 8;
            case 'Bad':
                return movie.rating < 5;
            default:
                return false;
        }
    }

    const filteredMovies = movies.filter(movie => {
        return matchGenre(movie, selectedGenre) && matchRating(movie, selectedRating) && matchSearchTerm(movie, searchTerm);
    });

    return (
        <div>
            <input
                type='text'
                placeholder='Search movies...'
                className='search-input'
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className='filter-slot'>
                <select className = "filter-dropdown" value={selectedGenre} onChange={handleGenreChange}>
                    <option value="All Genres">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Drama">Drama</option>
                </select>
                <select className = "filter-dropdown" value={selectedRating} onChange={handleRatingChange}>
                    <option value="All">All Ratings</option>
                    <option value="Good">Good</option>
                    <option value="Ok">Ok</option>
                    <option value="Bad">Bad</option>
                </select>
            </div>
            <div className='movie-card-info'>
                <ul className='movies-grid'>
                    {filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </ul>
            </div>  
        </div>
    );
}