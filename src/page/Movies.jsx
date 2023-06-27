import axios from 'axios';

import { BallTriangle } from 'react-loader-spinner';
import { options } from 'helpers/options';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${filmName}`,
        options
      )
      .then(resp => {
        setLoading(false);
        return setFilms(resp.data.results);
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
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
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
