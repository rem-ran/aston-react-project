import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSearchResults } from '../../store/moviesSlicer';

// импорт стилей
import './SearchForm.css';

// компонент формы поиска фильмов ////////////////////////////////////
const SearchForm = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // переменная состояния введённого текста в инпут
  const [searchInputValue, setSearchInputValue] = useState('');

  const allMovies = useSelector((state) => state.movies.docs);

  // переводим введенный в инпуте текст в нижний регистр
  const handleSearchValue = (e) => {
    setSearchInputValue(e.target.value.toLowerCase());
  };

  // метод обработки отправки формы
  const onSearch = (e) => {
    e.preventDefault();

    const filteredMovies = allMovies.filter((movie) =>
      movie.name.toLowerCase().includes(searchInputValue)
    );

    dispatch(setSearchResults(filteredMovies));

    // переводим на стртаницу поиска, если поиск произошёл на главной странице
    if (pathname === '/') {
      navigate('/search');
    }
  };

  return (
    <section className="search">
      <form className="search__form" role="search" onSubmit={onSearch}>
        <input
          name="q"
          aria-label="Поиск по списку фильмов на сайте"
          type="search"
          placeholder="Поиск фильмов"
          className="search__input"
          onChange={handleSearchValue}
          value={searchInputValue || ''}
        ></input>
        <button className="search__btn" onClick={onSearch}>
          Найти
        </button>
      </form>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default SearchForm;
