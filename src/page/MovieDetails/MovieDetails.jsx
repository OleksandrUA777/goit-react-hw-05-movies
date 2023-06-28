import { BallTriangle } from 'react-loader-spinner';
import { Suspense, useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Wrapper } from './MovieDetails.styled';
import { fetchDetails } from 'helpers/fetch-api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const genres = movieInfo.genres;

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setLoading(true);
    fetchDetails(movieId)
      .then(data => {
        setLoading(false);
        return setMovieInfo(data);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      {loading ? (
        <BallTriangle />
      ) : (
        <>
          <h2>MovieDetails</h2>
          <Link to={backLinkLocationRef.current}>Go back</Link>
          <Wrapper>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
              alt="poster"
              width="250"
              height="400"
            />
            <div className="description">
              <h2>{movieInfo.title}</h2>
              <p>User Rating: {movieInfo.vote_average}</p>
              <h3 className="bold">Overview</h3>
              <p>{movieInfo.overview}</p>
              <h3 className="bold">Genres</h3>
              <ul>
                {movieInfo.length !== 0 &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </Wrapper>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
            <Suspense loading="loading...">
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};
export default MovieDetails;
