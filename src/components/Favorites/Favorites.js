// импорт компонент
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// импорт стилей
import './Favorites.css';

// компонент страницы с избранными фильмами ////////////////////////////////////
const Favorites = () => {
  return (
    <div className="favorites">
      <Header></Header>
      <main className="favorites__content">Favorites</main>
      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Favorites;
