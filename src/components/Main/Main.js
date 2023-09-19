import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../store/moviesSlicer';

// импорт компонент
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

// импорт стилей
import './Main.css';

// компонент главной страницы с фильмами ////////////////////////////////////
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movies">
      <main className="saved-movies__content">
        <SearchForm></SearchForm>
        <MovieCardList></MovieCardList>
      </main>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Main;
