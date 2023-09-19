// импорт компонент
import { useSelector } from 'react-redux';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';

// импорт стилей
import './SearchPage.css';

// компонент страницы с поиском фильмов ////////////////////////////////////
const SearchPage = () => {
  const filteredMovies = useSelector((state) => state.movies.filteredMovies);

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
