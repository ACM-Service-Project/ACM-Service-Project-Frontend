import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Form from './pages/Form';
import Directory from './pages/Directory';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Logout from './pages/Logout';
// routes
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  // set user state
  const [user, setUser] = React.useState('null');
  
  // fetch user from localStorage on page load
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    // eslint-disable-next-line
  }, [localStorage.getItem('user')]);

  return (
    <Router>
      {/* Sidebar will show up when user is logged in */}
      <Sidebar />
      <Header />

      <Routes>
        {/* Pages accessible at all times */}
        <Route path="*" element={<NotFound />} />

        {/* Pages only accessed by un-logged in users */}
        <Route element={<ProtectedRoute isAllowed={user===null} redirectPath='/' />}>
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        {/* Pages only accessed by logged-in users */}
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path='/form' element={<Form />} />
          <Route path='/directory' element={<Directory />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/logout' element={<Logout />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
