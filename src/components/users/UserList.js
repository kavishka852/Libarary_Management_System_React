import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import UserService from '../../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers().then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Button variant="contained" color="primary" component={Link} to="/users/new">
        Add User
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" component={Link} to={`/users/${user.id}`}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
