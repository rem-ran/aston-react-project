// импорты
import { Route, Routes } from 'react-router-dom';

// импорт компонент
import Main from '../Main/Main';
import Login from '../Login/Login';
import History from '../History/History';
import Register from '../Register/Register';
import Favorites from '../Favorites/Favorites';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// импорт стилей
import './App.css';
import SearchPage from '../SearchPage/SearchPage';

function App() {
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
    </div>
  );
}

export default App;
