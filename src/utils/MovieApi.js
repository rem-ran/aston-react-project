import { apiMovieConfig } from './constants.js';

class MovieApi {
  constructor({ url, headers, credentials }) {
    this._url = url;
    this._credentials = credentials;
    this._headers = headers;
  }

  //метод проверки от сервера и преобразование из json
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText} `);
    }
    return res.json();
  }

  //получить список всех фильмов в виде массива
  getAllMovies() {
    return fetch(`${this._url}/v1.3/movie?limit=30`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  //получить список отфильтрованных фильмов в виде массива
  getFilteredMovies(query) {
    return fetch(`${this._url}/v1.2/movie/search?query=${query}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }
}

//создаём экземпляр класса MovieApi для работы с сервером
const movieApi = new MovieApi(apiMovieConfig);

export default movieApi;
