import { Navigate } from 'react-router-dom';

function ProtectedRouteLogged({ children, isLoggedIn }) {
  return isLoggedIn ? <Navigate to="/" replace /> : children;
}

export default ProtectedRouteLogged;
