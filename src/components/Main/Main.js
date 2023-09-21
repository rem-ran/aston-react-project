import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/moviesSlice';

// импорт компонент
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

// импорт стилей
import './Main.css';

// компонент главной страницы с фильмами ////////////////////////////////////
const Main = () => {
  const dispatch = useDispatch();

  const allMovies = useSelector((state) => state.movies.docs);

  useEffect(() => {
    dispatch(fetchMovies());
    console.log(allMovies);
  }, [dispatch]);

  return (
    <div className="movies">
      <main className="saved-movies__content">
        <SearchForm></SearchForm>
        <MovieCardList movies={allMovies}></MovieCardList>
      </main>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Main;
