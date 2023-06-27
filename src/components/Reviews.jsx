import axios from 'axios';
import { options } from 'helpers/options';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(reviews);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https:api.themoviedb.org/3/movie/${movieId}/reviews`, options)
      .then(resp => {
        setLoading(false);
        return setReviews(resp.data.results);
      });
  }, [movieId]);
  return (
    <>
      {loading ? (
        <BallTriangle />
      ) : (
        <ul>
          {reviews.length !== 0 ? (
            reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>«{content}»</p>
              </li>
            ))
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      )}
    </>
  );
};
//author
//content
export default Reviews;
