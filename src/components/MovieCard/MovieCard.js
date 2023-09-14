// импорт стилей
import './MovieCard.css';

// компонент карточки фильма ////////////////////////////////////
const MovieCard = ({ id, logo, name, movieLength }) => {
  //метод подсчёта времени в часах и минутах
  const calculateTiming = (minutes) => {
    return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
  };

  return (
    <li className="movie" id={id}>
      <a href={'#'} target="_blank" rel="noopener noreferrer">
        <img className="movie_image" src={logo.url} />
      </a>
      <div className="movie__text-box">
        <div className="movie__name-box">
          <p className="movie__heading">{name}</p>
          <button
            className={`movie__like-btn`}
            aria-label="Like"
            type="button"
            onClick={() => console.log('click')}
          />
        </div>
        <span className="movie__duration">{calculateTiming(movieLength)}</span>
      </div>
    </li>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MovieCard;
