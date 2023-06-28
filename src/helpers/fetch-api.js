import axios from 'axios';

const { options } = require('./options');

async function fetchTranding() {
  try {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
async function fetchSearch(q) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}`,
    options
  );
  return resp.data;
}
async function fetchDetails(movieId) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return resp.data;
}

async function fetchCast(movieId) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return resp.data;
}
async function fetchReviews(movieId) {
  const resp = await axios.get(
    `https:api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return resp.data;
}
export { fetchTranding, fetchSearch, fetchDetails, fetchCast, fetchReviews };
