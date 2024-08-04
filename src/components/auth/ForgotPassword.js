import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import AuthService from '../../services/AuthService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.forgotPassword(email).then(response => {
      console.log('Password reset link sent:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Typography variant="h4">Forgot Password</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Send Reset Link
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
