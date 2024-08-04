import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import AuthService from '../../services/AuthService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Member');

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.register(username, password, role).then(response => {
      console.log('Registered successfully:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
