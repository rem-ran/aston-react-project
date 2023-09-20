import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredMovies } from '../../store/moviesSlice';

// импорт компонент
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';

// импорт стилей
import './SearchPage.css';

// компонент страницы с поиском фильмов ////////////////////////////////////
const SearchPage = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const filteredMovies = useSelector((state) => state.movies.filteredMovies);

  const searchParams = new URLSearchParams(search);
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      dispatch(fetchFilteredMovies(query));
    }
  }, [dispatch, query]);

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
