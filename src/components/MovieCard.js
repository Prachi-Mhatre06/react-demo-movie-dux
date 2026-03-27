export default function MovieCard({  movie, isWatchlisted, toggleWatchlist }) {
    const getRatingClass = (rating) => {
        if (rating >= 8) {
            return 'rating-good';  
        } else if (rating >= 5) {
            return 'rating-ok';  
        } else {
            return 'rating-bad';  
        }   
    }
    return (
        <li className={'movie-card'} key={movie.id} movie={movie}>
            <img  src={`../images/${movie.image}`} alt={movie.image} />
            <div className='movie-card-title'>{movie.title}</div>
            <div className='movie-card-genre'>{movie.genre}</div>
            <div className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</div>
            <label className="switch">
            <input
                type="checkbox"
                checked={isWatchlisted}
                onChange={() => toggleWatchlist(movie.id)}
            ></input>

            <span className="slider">
                <span className="slider-label">
                {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
                </span>
            </span>
            </label>
        </li>
    );
}