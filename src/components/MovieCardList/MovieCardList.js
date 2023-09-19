// импорт компонент
import MovieCard from '../MovieCard/MovieCard';

// импорт стилей
import './MovieCardList.css';
import Preloader from '../Preloader/Preloader';

// компонент списка карточек фильмов ////////////////////////////////////
const MovieCardList = ({ movies }) => {
  if (!movies) {
    return <Preloader />;
  }
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </ul>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MovieCardList;
