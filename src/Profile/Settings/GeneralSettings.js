import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './GeneralSettings.css';

export default function GeneralSettings() {
  const [user, setUser] = useState({
    firstName: '',
    middleNames: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    job_title: '',
    company: '',
    profile_photo: ''
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/user', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
	alert('Error fetcing user details');
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/auth/profile', user, { withCredentials: true });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  return (
    <div className="general">
      <form onSubmit={handleProfileUpdate}>
        <div className="field">
          <label>First Name:</label>
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>Middle Name:</label>
          <input type="text" name="middleNames" value={user.middleNames} onChange={handleChange}/>
        </div>
        <div className="field">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
        </div>
	<hr />
        <div className="field">
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
	<hr />
        <div className="field">
          <label>Gender:</label>
          <input type="text" name="gender" value={user.gender} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange} required />
        </div>
	<hr />
	<div className="field">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={user.company}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Job Title:</label>
          <input
            type="text"
            name="job_title"
            value={user.job_title}
            onChange={handleChange}
          />
        </div>
        <hr />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};
