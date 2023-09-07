import { Navigate } from 'react-router-dom';

function ProtectedRouteLogged({ children, isLoggenIn }) {
  return isLoggenIn ? <Navigate to="/" replace /> : children;
}

export default ProtectedRouteLogged;
