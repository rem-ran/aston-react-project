// импорты
import { Routes } from 'react-router-dom';

// импорт компонент
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

// импорт стилей
import './App.css';

function App() {
  return (
    <div className="page">
      <Routes></Routes>
    </div>
  );
}

export default App;
