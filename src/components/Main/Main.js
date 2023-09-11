// импорт компонент
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

// импорт стилей
import './Main.css';
import { useEffect } from 'react';

// компонент главной страницы с фильмами ////////////////////////////////////
const Main = ({ isLoggedIn }) => {
  useEffect(() => {
    console.log(isLoggedIn);
  }, []);
  return (
    <div className="movies">
      <Header isLoggedIn={isLoggedIn}></Header>
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
