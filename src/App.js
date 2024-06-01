import logo from './logo.svg';
import Home from './Home/Home';
import HomeInfo from './Home/homeInfo';
import About from './About/About';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';
import DashBoard from './Profile/DashBoard';
import Patients from './Profile/Patients';
import Analyse from './Profile/Analyse';
import Calendar from './Profile/Calendar';
import Settings from './Profile/Settings';
import Messages from './Profile/Messages';
import Prescription from './Profile/Prescription';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
	<Routes>
          <Route path='/' element={<Home />} >
	    <Route index element={<Navigate to="home" />} />
	    <Route path='home' element={<HomeInfo />} />
	    <Route path='about' element={<About />} />
	    <Route path='contact' element={<Contact />} />
	  </Route>
          <Route path='login' element={<Login />} />
	  <Route path='signup' element={<SignUp />} />
	  <Route path='profile' element={<Profile />}>
	    <Route index element={<Navigate to="dashboard" />} />
	    <Route path="dashboard" element={<DashBoard />} />
            <Route path="calendar" element={<Calendar />} />
	    <Route path="analyse" element={<Analyse />} />
            <Route path="messages" element={<Messages />} />
            <Route path="patients" element={<Patients />} />
            <Route path="prescription" element={<Prescription />} />
            <Route path="settings" element={<Settings />} />
	  </Route>
	</Routes>
      </Router>
    </div>
  );
}

export default App;
