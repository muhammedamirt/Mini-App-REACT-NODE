import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/signup';

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path='/login' element={<Login /> }/>
        <Route exact path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  )
}

export default App;
