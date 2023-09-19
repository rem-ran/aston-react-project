// объект с нужными для работы с сервером данными
export const apiMovieConfig = {
  url: 'https://api.kinopoisk.dev',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '7TX903H-MWB432H-GXEP354-DJ98C1G',
  },
};

// список необходимых ссылок (авторизованных) для хедера на страницах с фильмами
export const headerLinks = [
  { route: '/favorites', text: 'Избранные фильмы' },
  { route: '/history', text: 'История' },
];

export const headerSignoutLink = {
  route: '/',
  text: 'Выйти',
};

// необходимая ссылка для хедера на страницах с фильмами, если не авторизован
export const headerLink = { route: '/signin', text: 'Авторизоваться' };

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

// текст лэёблов инпутов
export const inputLabelTxt = {
  email: 'E-mail',
  password: 'Пароль',
};

// текст полей страницы авторизации
export const loginTxt = {
  heading: 'Есть аккаунт? Вперёд!',
  btnTxt: 'Войти',
  linkTxt: 'Регистрация',
  linkRoute: '/signup',
  questionTxt: 'Ещё не зарегистрированы?',
};

// текст полей страницы регистрации
export const registerTxt = {
  heading: 'Тут можно зарегистрироваться!',
  btnTxt: 'Зарегистрироваться',
  linkTxt: 'Войти',
  linkRoute: '/signin',
  questionTxt: 'Уже зарегистрированы?',
};

//настройки зарегистрированных инпутов
export const inputConfig = {
  email: {
    required: 'Поле "E-mail" обязательно к заполнению',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      message: 'Пожалуйста введите валидный email адрес',
    },
  },
  password: {
    required: 'Поле "Пароль" обязательно к заполнению',
    minLength: { value: 3, message: 'Длина поля "Пароль" минумум 3 символа' },
  },
};
