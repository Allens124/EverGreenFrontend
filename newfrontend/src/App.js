import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import MapPage from './components/MapPage';
import FAQPage from './components/FAQPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/MapPage">Map</Link>
        <Link to="/FAQPage">FAQ</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MapPage" element={<MapPage />} />
        <Route path="/FAQPage" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}

export default App;