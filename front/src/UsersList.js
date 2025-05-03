import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">Registered Users</Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id} divider>
            <ListItemText primary={user.fullName} secondary={`${user.email} | ${user.mobile} | DOB: ${user.dob}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
