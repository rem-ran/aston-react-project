// импорт компонент
import MovieCard from '../MovieCard/MovieCard';

// импорт стилей
import './MovieCardList.css';

// компонент списка карточек фильмов ////////////////////////////////////
const MovieCardList = ({ movies }) => {
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
