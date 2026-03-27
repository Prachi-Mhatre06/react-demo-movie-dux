
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App container">
      <Header />
      <MoviesGrid />
      <Footer />
    </div>
    
  );
}

export default App;
