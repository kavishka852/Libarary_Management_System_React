import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import AuthService from '../../services/AuthService';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.resetPassword(newPassword).then(response => {
      console.log('Password reset successfully:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Typography variant="h4">Reset Password</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
