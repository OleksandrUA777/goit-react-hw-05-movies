import { BallTriangle } from 'react-loader-spinner';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'helpers/fetch-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  //   console.log('location movies: ', location);
  const filmName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filmName === '') return;
    setLoading(true);
    fetchSearch(filmName).then(resp => {
      setLoading(false);
      return setFilms(resp.results);
    });
  }, [filmName]);

  const formSubmitHandler = event => {
    event.preventDefault();
    setSearchParams({ query: searchName });

    setSearchName('');
  };

  const inputChange = event => {
    setSearchName(event.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={searchName} onChange={inputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {loading ? (
          <BallTriangle />
        ) : (
          films.length !== 0 &&
          films.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
export default Movies;
// (
//           filmName === ' ' ||
//           (films.length === 0 && (
//             <h2>oops, there is not any films related to {filmName}</h2>
//           ))
//         )
