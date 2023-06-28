import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { fetchReviews } from 'helpers/fetch-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(reviews);
  useEffect(() => {
    setLoading(true);
    fetchReviews(movieId).then(resp => {
      setLoading(false);
      return setReviews(resp.results);
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
