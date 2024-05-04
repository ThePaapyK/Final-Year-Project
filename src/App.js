import logo from './logo.svg';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
	<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
	  <Route path='/signup' element={<SignUp />} />
	  <Route path='/profile' element={<Profile />} />
	</Routes>
      </Router>
    </div>
  );
}

export default App;
