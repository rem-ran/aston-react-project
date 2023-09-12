// импорты
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// импорт констант
import {
  headerLinks,
  headerSignoutLink,
  headerLink,
} from '../../utils/constants';

// импорт стилей
import './Navigation.css';
import { toggleIsLoggedIn } from '../../store/userSlicer';

// компонент навигации на страницах с фильмами /////////////////////////
const Navigation = () => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="nav__link-container nav__link-container_type_hidden">
      {isLoggedIn ? (
        <>
          {/*  показываем линики, если пользователь авторизован */}
          {headerLinks.map((link, index) => (
            <NavLink key={index} to={link.route} className="nav__link">
              {link.text}
            </NavLink>
          ))}

          {/* линк логаута */}
          <NavLink
            to={headerSignoutLink.route}
            className={'nav__link'}
            onClick={() => dispatch(toggleIsLoggedIn())}
          >
            {headerSignoutLink.text}
          </NavLink>
        </>
      ) : (
        // если не авторизован, только линк на авторизацию
        <NavLink to={headerLink.route} className="nav__link">
          {headerLink.text}
        </NavLink>
      )}
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Navigation;
