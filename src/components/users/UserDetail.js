import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import UserService from '../../services/UserService';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    username: '',
    role: ''
  });

  useEffect(() => {
    UserService.getUserById(id).then(response => {
      setUser(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.updateUser(id, user).then(response => {
      console.log('User updated successfully:', response);
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

export default UserDetail;
