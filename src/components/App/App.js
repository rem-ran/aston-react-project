// импорты
import { useEffect, useState } from 'react';
import { auth } from '../../utils/fbConfig';
import { fetchMovies } from '../../store/moviesSlicer';
import { useDispatch, useSelector } from 'react-redux';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { toggleIsLoggedIn, setUser, resetUser } from '../../store/userSlicer';

// импорт компонент
import Main from '../Main/Main';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import History from '../History/History';
import Register from '../Register/Register';
import Favorites from '../Favorites/Favorites';
import SearchPage from '../SearchPage/SearchPage';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// импорт стилей
import './App.css';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // список роутов, в которых нужен хедер и футер
  const headerFooterVisibleRoutes = ['/', '/search', '/history', '/favorites'];

  // переменная, по которой будем определять через location нужен ли нам хедер и футер
  const isHeaderFooterVisible = headerFooterVisibleRoutes.includes(pathname);

  // переменная состояния загрузки
  const [isLoading, setIsLoading] = useState(false);

  /////////////////////////////////////////////////////////////////////////

  // метода авторизации пользоваетля на странице через firebase
  const handleUserSignIn = ({ email, password }) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        if (data.user.uid) {
          localStorage.setItem('token', data.user.uid);
          dispatch(toggleIsLoggedIn());
          dispatch(setUser({ email: data.user.email, uid: data.user.uid }));
          navigate('/', { replace: true });
        }
      })

      .catch((error) => console.log(`SignIn Error${error}`))

      .finally(() => setIsLoading(false));
  };

  /////////////////////////////////////////////////////////////////////////

  // метод регистрации пользоваетля на странице через firebase
  const handleUserSignUp = ({ email, password }) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        handleUserSignIn({ email, password });
      })

      .catch((error) => console.log(`SignUp Error${error}`))

      .finally(() => setIsLoading(false));
  };

  /////////////////////////////////////////////////////////////////////////

  // метод выхода пользоваетля из системы firebase
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('token');
        localStorage.clear();
        dispatch(toggleIsLoggedIn());
        dispatch(resetUser());
        navigate('/');
      })

      .catch((error) => {
        console.log(`SignOut: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод проверки токенов авторизированных пользователей, вернувшихся в приложение
  const handleTokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(toggleIsLoggedIn());

      navigate(pathname, { replace: true });
    }
  };

  /////////////////////////////////////////////////////////////////////////

  // вызываем метод проверки токенов при рендеринге приложения
  useEffect(() => {
    handleTokenCheck();
  }, []);

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div className="page">
      {/* рендерим хедер только в нужных роутах */}
      {isHeaderFooterVisible && <Header handleSignOut={handleSignOut}></Header>}

      <Routes>
        {/* рут авторизации //////////////////////////////,////////////////////*/}
        <Route
          path="/signin"
          element={
            <ProtectedRoute>
              <Login
                handleUserSignIn={handleUserSignIn}
                isLoading={isLoading}
              ></Login>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут регистрации //////////////////////////////,////////////////////*/}
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <Register
                handleUserSignUp={handleUserSignUp}
                isLoading={isLoading}
              ></Register>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут с главной страницей с фильмами /////////////////////////////////*/}
        <Route path="/" exact element={<Main></Main>}></Route>

        {/* рут со страницей с поиском фильмов /////////////////////////////////*/}
        <Route path="/search" exact element={<SearchPage></SearchPage>}></Route>

        {/* рут страницы с избранными фильмами/////////////////////////////////*/}
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites></Favorites>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут страницы с историей поиска фильмов ///////////////////////////*/}
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History></History>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут несуществующей страницы /////////////////////////////////////*/}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      {/* рендерим футер только в нужных роутах */}
      {isHeaderFooterVisible && <Footer />}
    </div>
  );
}

export default App;
