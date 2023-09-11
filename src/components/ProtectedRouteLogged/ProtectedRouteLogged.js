// импорты
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// компонент навигации авторизированного защищённого роута
function ProtectedRouteLogged({ children }) {
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);

  return isLoggedIn ? <Navigate to="/" replace /> : children;
}

export default ProtectedRouteLogged;
