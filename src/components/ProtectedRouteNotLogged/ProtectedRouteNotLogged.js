// импорты
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// компонент навигации неавторизированного защищённого роута
function ProtectedRouteNotLogged({ children }) {
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRouteNotLogged;
