import './App.css';
import Login from './components/login/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/signup/signup';
import Home from './pages/Home/Home';
import Profile from './pages/userProfile/Profile';
import AdminLogin from './adminpages/components/login/login';
import EditUserProfile from './pages/editProfile/editProfile';
import ViewUser from './adminpages/components/viewUser/ViewUser';
import EditUser from './adminpages/components/editusers/editUser';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { AuthContext } from './store/authContext';
import { useContext } from 'react';


function App() {
  
  return (
    <Router >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/userprofile' element={<Profile />} />
        <Route exact path='/editprofile' element={<EditUserProfile />} />
        <Route exact path='/adminLogin' element={<AdminLogin />} />
        <Route exact path='/adminViewUser' element={<ViewUser />} />
        <Route exact path='/adminEditUser' element={<EditUser />} />
      </Routes>
    </Router>
  )
}

export default App;
