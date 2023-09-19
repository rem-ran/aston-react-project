import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { calculateTiming } from '../../utils/utils';

// импорт стилей
import './MovieCard.css';

// компонент карточки фильма ////////////////////////////////////
const MovieCard = ({ id, poster, name, year, movieLength }) => {
  const { pathname } = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  const handleAddToFavotites = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  return (
    <li className="movie" id={id}>
      <a href={'#'} target="_blank" rel="noopener noreferrer">
        <img
          className="movie_image"
          src={pathname === '/' ? poster.previewUrl : poster}
          alt={name}
        />
      </a>
      <div className="movie__text-box">
        <div className="movie__name-box">
          <p className="movie__heading">{`${name} (${year})`}</p>
          <button
            className={`movie__like-btn ${isLiked && 'movie__like-btn_active'}`}
            aria-label="Like"
            type="button"
            onClick={handleAddToFavotites}
          />
        </div>
        <span className="movie__duration">{calculateTiming(movieLength)}</span>
      </div>
    </li>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MovieCard;
