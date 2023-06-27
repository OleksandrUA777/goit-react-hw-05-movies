import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { options } from 'helpers/options';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  //   console.log('location: ', location);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        options
      )
      .then(response => response.data)
      .then(response => {
        setLoading(false);
        return setMovies(response.results);
      })
      .catch(err => console.error(err));
  }, []);
  //http://localhost:3001/goit-react-hw-05-movies/home
  return (
    <ul>
      {loading ? (
        <BallTriangle />
      ) : (
        movies?.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Home;
