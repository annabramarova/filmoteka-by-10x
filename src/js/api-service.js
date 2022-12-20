import axios from 'axios';
// class Film {
//   constructor() {}
// }

const vars = {
  api_key: 'c23d7755b502540a74ef819e02a6a593',
  URL: 'https://api.themoviedb.org/3/movie',
  pagination: '&query=${}&page=${}&total_pages=${}',
};

export async function trendFilms() {
  // const b = await axios.get(
  //   'https://api.themoviedb.org/3/movie/550?api_key=c23d7755b502540a74ef819e02a6a593'
  // );
  const a = await axios.get(`${vars.URL}?api_key=${vars.api_key}`);
  console.log(a);
}

console.log(vars.URL);
console.log(vars.api_key);
trendFilms();
