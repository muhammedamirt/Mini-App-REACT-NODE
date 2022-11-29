import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/signup';
import Home from './pages/Home/Home';
import Profile from './pages/userProfile/Profile';

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/userprofile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App;
