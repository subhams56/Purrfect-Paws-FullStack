
import { Route, Navigate } from 'react-router-dom';
import { checkAuthentication } from './checkAuthentication';

// ProtectedRoute component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = checkAuthentication();

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/unauthorized" replace state={{ from: rest.location }} />
  );
};

export default ProtectedRoute;
