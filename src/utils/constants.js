// список необходимых ссылок (авторизованных) для хедера на страницах с фильмами
export const moviesHeaderLinks = [
  { route: '/favorites', text: 'Избранные фильмы' },
  { route: '/history', text: 'История' },
];

// необходимая ссылка для хедера на страницах с фильмами, если не авторизован
export const moviesHeaderLink = { route: '/signin', text: 'Авторизоваться' };

// текст футера
export const footerText = {
  heading: 'Учебный проект Aston. React интерсив',
  year: 2023,
};

// список ссылкок футеры
export const footerLinks = [
  {
    heading: 'Kinopoisk',
    link: 'https://www.kinopoisk.ru',
  },
  {
    heading: 'Github',
    link: 'https://github.com/rem-ran/aston-react-project',
  },
];
