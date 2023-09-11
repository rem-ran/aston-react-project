// импорт стилей
import { useState } from 'react';
import './SearchForm.css';

// компонент формы поиска фильмов ////////////////////////////////////
const SearchForm = ({ isLoading, handleMovieSearch }) => {
  // переменная состояния введённого текста в инпут
  const [searchInputValue, setSearchInputValue] = useState('');

  // передаём введённый в поиске текст в верхний компонент
  const handleSearchValue = (e) => {
    setSearchInputValue(e.target.value.toLowerCase());
  };

  // метод обработки отправки формы
  const onSearch = (e) => {
    e.preventDefault();
    handleMovieSearch(searchInputValue);
  };

  return (
    <section className="search">
      <form className="search__form" role="search" onSubmit={onSearch}>
        <input
          disabled={isLoading && true}
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
