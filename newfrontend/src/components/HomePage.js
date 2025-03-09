import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Healthy Areas App</h1>
      <p>Click below to go to the map page and see healthy areas in your location.</p>
      <Link to="/map">
        <button>Go to Map</button>
      </Link>
    </div>
  );
};

export default HomePage;