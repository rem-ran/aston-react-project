import { calculateTiming } from '../../utils/utils';

// импорт стилей
import './MovieCard.css';

// компонент карточки фильма ////////////////////////////////////
const MovieCard = ({ id, poster, name, year, movieLength }) => {
  return (
    <li className="movie" id={id}>
      <a href={'#'} target="_blank" rel="noopener noreferrer">
        <img className="movie_image" src={poster.previewUrl} alt={name} />
      </a>
      <div className="movie__text-box">
        <div className="movie__name-box">
          <p className="movie__heading">{`${name} (${year})`}</p>
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
