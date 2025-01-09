import React, { useState } from 'react';
import axios from 'axios';

export default function AccountSettings() {
 const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert('New passwords do not match');
      return;
    }
    try {
      await axios.put('http://localhost:5000/api/auth/update-password', passwords, { withCredentials: true });
      alert('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Error updating password');
    }
  };


  return (
    <>
    </>
  );
};
