import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <img src="/logo.png" className="logo" alt="logo" />
            <h2 className='app-subtitle'>Its time for popcorn! Find your next movie here.</h2>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/watchlist">Watchlist</Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}