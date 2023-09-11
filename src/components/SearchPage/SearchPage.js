// импорт компонент
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';

// импорт стилей
import './SearchPage.css';

// компонент страницы с поиском фильмов ////////////////////////////////////
const SearchPage = () => {
  return (
    <div className="search-page">
      <Header></Header>
      <main className="search-page__content">
        <SearchForm></SearchForm>
        <MovieCardList></MovieCardList>
      </main>
      SearchPage
      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default SearchPage;
