import { Navigate } from 'react-router-dom';

function ProtectedRouteNotLogged({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRouteNotLogged;
