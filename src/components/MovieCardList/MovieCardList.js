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

  const mov = [];
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {mov.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </ul>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MovieCardList;
