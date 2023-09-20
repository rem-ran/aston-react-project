import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// импорт компонент
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';

// импорт стилей
import './SearchPage.css';
import { fetchFilteredMovies } from '../../store/moviesSlice';

// компонент страницы с поиском фильмов ////////////////////////////////////
const SearchPage = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const filteredMovies = useSelector((state) => state.movies.filteredMovies);

  const searchParams = new URLSearchParams(search);
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      console.log(query);
      dispatch(fetchFilteredMovies(query));
    }
  }, [query]);

  return (
    <div className="search-page">
      <main className="search-page__content">
        <SearchForm></SearchForm>
        <MovieCardList movies={filteredMovies}></MovieCardList>
      </main>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default SearchPage;
