import queryString from 'query-string';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ee52528a3d2bfff0312880daeaee21b3';

const getRequest = async function(url) {
  const request = await fetch(`${BASE_URL}/${url}`);
  const json = await request.json();
  return json;
};

export const searchMovies = async function(keyword) {
  const url = `search/movie`;
  const query = queryString.stringify({
    query: keyword,
    api_key: API_KEY
  });
  return getRequest(`${url}?${query}`);
};

export const movieDetails = async function(id) {
  const url = `movie/${id}`;
  const query = queryString.stringify({
    api_key: API_KEY
  });
  return getRequest(`${url}?${query}`);
};

export const popularMovies = async function() {
  const url = `movie/popular`;
  const query = queryString.stringify({
    api_key: API_KEY
  });
  return getRequest(`${url}?${query}`);
};
