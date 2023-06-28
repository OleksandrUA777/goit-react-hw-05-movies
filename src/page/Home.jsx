import { BallTriangle } from 'react-loader-spinner';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTranding } from 'helpers/fetch-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  //   console.log('location: ', location);

  useEffect(() => {
    setLoading(true);
    fetchTranding().then(response => {
      setLoading(false);
      return setMovies(response.results);
    });
  }, []);
  //http://localhost:3001/goit-react-hw-05-movies/home
  return (
    <ul>
      {loading ? (
        <BallTriangle />
      ) : (
        movies?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Home;
