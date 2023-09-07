import { Navigate } from 'react-router-dom';

function ProtectedRouteNotLogged({ children, isLoggenIn }) {
  return isLoggenIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRouteNotLogged;
