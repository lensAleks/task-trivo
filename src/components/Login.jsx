import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from '../store/slice'
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Admin111') {
        dispatch(login())
        setError('')    
      
    } else {
        setError('Invalid username or password');
    }  
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4">Login</Typography>
        <form>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error && username !== 'admin'}
            helperText={error && username !== 'admin' && error}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error && password !== 'Admin111'}
            helperText={error && password !== 'Admin111' && error}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
