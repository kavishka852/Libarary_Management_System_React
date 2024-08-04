import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import AuthService from '../../services/AuthService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.login(username, password).then(response => {
      console.log('Logged in successfully:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Typography variant="h4">Login</Typography>
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
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
