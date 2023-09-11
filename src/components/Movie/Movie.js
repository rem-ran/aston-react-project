// импорт компонент
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// импорт стилей
import './Movie.css';

// компонент страницы с выбранным фильмом ////////////////////////////////////
const Movie = () => {
  return (
    <div className="movie">
      <Header></Header>
      <main className="movie__content">Movie</main>
      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Movie;
