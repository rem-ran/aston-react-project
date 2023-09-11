// импорт компонент
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

// импорт стилей
import './Main.css';

// компонент главной страницы с фильмами ////////////////////////////////////
const Main = ({ isLoggenIn }) => {
  return (
    <div className="movies">
      <Header isLoggenIn={isLoggenIn}></Header>
      <main className="saved-movies__content">
        <SearchForm></SearchForm>
        <MovieCardList></MovieCardList>
      </main>
      Main
      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Main;
