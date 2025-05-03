import React, { useState } from 'react';
import Register from './Register';
import UsersList from './UsersList';
import { Button } from '@mui/material';

function App() {
  const [view, setView] = useState('register');

  return (
    <div>
      <Button onClick={() => setView('register')}>Register</Button>
      <Button onClick={() => setView('list')}>Users List</Button>
      {view === 'register' ? <Register /> : <UsersList />}
    </div>
  );
}

export default App;
