/* Author: Alexander Berryhill
 * 
 * React component that defines a ProtectedRoute, which is a 
 * route that requires authentication or authorization to access. 
 * The component takes three props - isAllowed, redirectPath, and 
 * children. If isAllowed is false, it will redirect the user to 
 * the specified redirectPath. If isAllowed is true, it will return 
 * the children components. If children components are not provided, 
 * it will render the child routes using the Outlet component from 
 * the react-router-dom.
 */

// Import React and react-router-dom libraries
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Define a functional component named 'ProtectedRoute' with three props: 'isAllowed', 'redirectPath' and 'children'
const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/login', // default redirect path is set to '/login'
    children, // 'children' prop contains the child components that are to be rendered inside the 'ProtectedRoute' component
}) => {
  if (!isAllowed) { // If the user is not allowed to access the protected route, redirect them to the specified redirect path
    return <Navigate to={redirectPath} replace />;
  }

  // If the user is allowed to access the protected route, render the child components or pass control to the child routes using 'Outlet'
  return children ? children : <Outlet />;
};

// Export the 'ProtectedRoute' component as the default export of this module
export default ProtectedRoute;