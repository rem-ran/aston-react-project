// импорт компонент
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';

// импорт стилей
import './SearchPage.css';

// компонент страницы с поиском фильмов ////////////////////////////////////
const SearchPage = () => {
  return (
    <div className="search-page">
      <main className="search-page__content">
        <SearchForm></SearchForm>
        <MovieCardList></MovieCardList>
      </main>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default SearchPage;
