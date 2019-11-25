import config from '../config';

const GiphyApiService = {
  getGifFromSearch(searchTerm, weirdness =0) {

    return fetch(
      `${config.API_ENDPOINT}?api_key=${config.API_KEY}&s=${searchTerm}&weirdness=${weirdness}`,
      {
        method: 'GET'
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default GiphyApiService;
