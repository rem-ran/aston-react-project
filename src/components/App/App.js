// импорты
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// импорт компонент
import Main from '../Main/Main';
import Login from '../Login/Login';
import History from '../History/History';
import Register from '../Register/Register';
import Favorites from '../Favorites/Favorites';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRouteLogged from '../ProtectedRouteLogged/ProtectedRouteLogged';
import ProtectedRouteNotLogged from '../ProtectedRouteNotLogged/ProtectedRouteNotLogged';

// импорт стилей
import './App.css';
import SearchPage from '../SearchPage/SearchPage';

function App() {
  // переменная состояния авторизации пользователя
  const [isLoggenIn, setIsLoggenIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        {/* рут с главной страницей с фильмами /////////////////////////////////*/}
        <Route path="/" exact element={<Main></Main>}></Route>

        {/* рут со страницей с поиском фильмов /////////////////////////////////*/}
        <Route path="/search" exact element={<SearchPage></SearchPage>}></Route>

        {/* рут авторизации //////////////////////////////,////////////////////*/}
        <Route
          path="/signin"
          element={
            <ProtectedRouteLogged isLoggenIn={isLoggenIn}>
              <Login></Login>
            </ProtectedRouteLogged>
          }
        ></Route>

        {/* рут регистрации //////////////////////////////,////////////////////*/}
        <Route
          path="/signup"
          element={
            <ProtectedRouteLogged isLoggenIn={isLoggenIn}>
              <Register></Register>
            </ProtectedRouteLogged>
          }
        ></Route>

        {/* рут страницы с избранными фильмами/////////////////////////////////*/}
        <Route
          path="/favorites"
          element={
            <ProtectedRouteNotLogged isLoggenIn={isLoggenIn}>
              <Favorites></Favorites>
            </ProtectedRouteNotLogged>
          }
        ></Route>

        {/* рут страницы с историей поиска фильмов ///////////////////////////*/}
        <Route
          path="/history"
          element={
            <ProtectedRouteNotLogged isLoggenIn={isLoggenIn}>
              <History></History>
            </ProtectedRouteNotLogged>
          }
        ></Route>

        {/* рут несуществующей страницы /////////////////////////////////////*/}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
