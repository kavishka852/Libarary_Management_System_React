import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import UserService from '../../services/UserService';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: '',
    role: ''
  });

  useEffect(() => {
    UserService.getCurrentUser().then(response => {
      setUser(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.updateUser(user.id, user).then(response => {
      console.log('User profile updated successfully:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Typography variant="h4">My Profile</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Role"
          name="role"
          value={user.role}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
