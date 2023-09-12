// импорты
import { Route, Routes, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  // список роутов, в которых нужен хедер и футер
  const headerFooterVisibleRoutes = ['/', '/search', '/history', '/favorites'];

  // переменная, по которой будем определять через location нужен ли нам хедер и футер
  const isHeaderFooterVisible = headerFooterVisibleRoutes.includes(
    location.pathname
  );

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div className="page">
      {/* рендерим хедер только в нужных роутах */}
      {isHeaderFooterVisible && <Header />}

      <Routes>
        {/* рут авторизации //////////////////////////////,////////////////////*/}
        <Route
          path="/signin"
          element={
            <ProtectedRoute>
              <Login></Login>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут регистрации //////////////////////////////,////////////////////*/}
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <Register></Register>
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
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      {/* рендерим футер только в нужных роутах */}
      {isHeaderFooterVisible && <Footer />}
    </div>
  );
}

export default App;
