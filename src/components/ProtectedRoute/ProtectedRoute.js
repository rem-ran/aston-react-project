// импорты
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// компонент навигации авторизированного защищённого роута
function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);

  return !isLoggedIn ? (
    isLoggedIn ? (
      <Navigate to="/" replace />
    ) : (
      children
    )
  ) : isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
