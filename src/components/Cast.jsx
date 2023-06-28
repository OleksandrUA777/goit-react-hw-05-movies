import { fetchCast } from 'helpers/fetch-api';
import { useState } from 'react';
import { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

//https://api.themoviedb.org/3/movie/movie_id/credits

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCast(movieId).then(data => {
      setLoading(false);
      return setCast(data.cast);
    });
  }, [movieId]);
  return (
    <ul>
      {loading ? (
        <BallTriangle />
      ) : (
        cast.length !== 0 &&
        cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${profile_path}`}
              alt="actor"
              width="100"
              height="150"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))
      )}
    </ul>
  );
};
export default Cast;

//profile_path
//https://image.tmdb.org/t/p/original/${movieInfo.poster_path
//name
//character
