// импорты
import { Link } from 'react-router-dom';

// ипорт картинки
import headerLogo from '../../images/Kinopoisk__logo.png';

//импорт стилей
import './Header.css';
import Navigation from '../Navigation/Navigation';

// компонет хедера ////////////////////////////////////////////////////
const Header = ({ isLoggenIn }) => {
  // начало JSX ////////////////////////////////////////////////////////////
  return (
    // coloredHeaderStyle меняет цвет хедера в зависимости где он вызван
    <header className="header">
      <div className="header__container">
        {/* при нажатии на лого переходим на основную страницу */}
        <Link to="/">
          <img
            className="header__logo"
            src={headerLogo}
            alt="логотип кинопосика"
          />
        </Link>

        {/* компонент списка линков на другие страницы */}
        <Navigation isLoggenIn={isLoggenIn}></Navigation>
      </div>
    </header>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Header;
