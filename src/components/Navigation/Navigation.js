// импорты
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// импорт констант
import { moviesHeaderLinks, moviesHeaderLink } from '../../utils/constants';

// импорт стилей
import './Navigation.css';

// компонент навигации на страницах с фильмами /////////////////////////
const Navigation = () => {
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);
  return (
    <div className="nav__link-container nav__link-container_type_hidden">
      {isLoggedIn ? (
        // показываем линики, если пользователь авторизован
        moviesHeaderLinks.map((link, index) => (
          <NavLink key={index} to={link.route} className="nav__link">
            {link.text}
          </NavLink>
        ))
      ) : (
        // если не авторизован, только линк на авторизацию
        <NavLink to={moviesHeaderLink.route} className="nav__link">
          {moviesHeaderLink.text}
        </NavLink>
      )}
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Navigation;
