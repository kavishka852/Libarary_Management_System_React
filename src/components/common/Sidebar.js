import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/books">
          <ListItemText primary="Books" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
