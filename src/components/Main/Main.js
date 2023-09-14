// импорт компонент
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

// импорт стилей
import './Main.css';

// компонент главной страницы с фильмами ////////////////////////////////////
const Main = ({ movies, handleMovieSearch }) => {
  return (
    <div className="movies">
      <main className="saved-movies__content">
        <SearchForm handleMovieSearch={handleMovieSearch}></SearchForm>
        <MovieCardList movies={movies}></MovieCardList>
      </main>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Main;
