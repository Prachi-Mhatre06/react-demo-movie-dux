import MovieCard from './MovieCard';

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
    const watchlistedMovies = movies.filter(movie => watchlist.includes(movie.id));

    return (
        <div>
            <h2>My Watchlist</h2>
            <ul className='movies-grid'>
                {watchlistedMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        isWatchlisted={watchlist.includes(movie.id)}
                        toggleWatchlist={toggleWatchlist}
                    />
                ))}
            </ul>
        </div>
    );
}