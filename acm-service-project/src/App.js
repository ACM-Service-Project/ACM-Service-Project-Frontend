import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
