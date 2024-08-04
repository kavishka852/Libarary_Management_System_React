import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import UserService from '../../services/UserService';

const UserForm = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.createUser(user).then(response => {
      console.log('User created successfully:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
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
          label="Password"
          name="password"
          type="password"
          value={user.password}
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
          Add User
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
