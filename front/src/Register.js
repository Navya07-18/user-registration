import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({ fullName: '', email: '', mobile: '', dob: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/register', formData);
    alert('User Registered!');
  };

  return (
    <Box sx={{ p: 4 }}>
      <TextField label="Full Name" name="fullName" onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Mobile Number" name="mobile" onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Date of Birth" type="date" name="dob" InputLabelProps={{ shrink: true }} onChange={handleChange} fullWidth margin="normal" />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}
