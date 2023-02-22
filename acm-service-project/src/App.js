import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      {/* Sidebar will show up when user is logged in */}
      <Sidebar />
      <Header />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
