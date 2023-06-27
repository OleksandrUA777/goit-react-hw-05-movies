// import axios from 'axios';

// const getTrandingMovies = () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDFiMjJjZDMxNzc2OGQ3ZmI0YTY5ZTk2ODNkYTM1NyIsInN1YiI6IjYzZTNkMDRmZmFjNTAyMDBmMzMwZDU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBYUdlTQqiu0VhNNlWMH1wcEwTL9I5EDJUoCwODAJ3I',
//     },
//   };

//   return axios
//     .get(
//       'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
//       options
//     )
//     .then(response => response.data)
//     .then(response => response.results)
//     .catch(err => console.error(err));
// };
// export default getTrandingMovies;
