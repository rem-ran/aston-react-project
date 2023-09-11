import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// импорт стилей
import './SearchForm.css';

// компонент формы поиска фильмов ////////////////////////////////////
const SearchForm = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // переменная состояния введённого текста в инпут
  const [searchInputValue, setSearchInputValue] = useState('');

  // переводим введенный в инпуте текст в нижний регистр
  const handleSearchValue = (e) => {
    setSearchInputValue(e.target.value.toLowerCase());
  };

  // метод обработки отправки формы
  const onSearch = (e) => {
    e.preventDefault();

    console.log(searchInputValue);
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
