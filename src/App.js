
import './styles.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.includes(movieId)) {
        return prevWatchlist.filter((id) => id !== movieId);
      } else {
        return [...prevWatchlist, movieId];
      }
    });
  };

  useEffect(() => {
        fetch('./movies.json')
        .then(res => res.json())
        .then(movies => setMovies(movies))
    }, []);

  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path='/' element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
        <Route path='/watchlist' element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
