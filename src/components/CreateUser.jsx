import * as React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function generateUniqueId() {
    const randomPart = Math.random().toString(36).substr(2, 9);
    const timestampPart = new Date().getTime();
    const uniqueId = randomPart + timestampPart;
    return uniqueId;
  }
 
function CreateUser() {
  
  const dispatch = useDispatch()
  const [isError, setIsError] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');

  const reset = () => {
    if(name && email && phoneNumber && age) {
      setIsError(false)
      const id = generateUniqueId()
      const item = {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          age: age,
          id: id
      }
      dispatch(addUser(item))
      setName('')
      setEmail('')
      setPhoneNumber('')
      setAge('')
  } else {
      setIsError(true)
  }    
   
  };

  return (
    <div>
      <form >
        <Box sx={style}>
        <TextField  id="margin-dense" margin="dense" size="small" label="Name" value={name} 
          onChange={(e) => setName(e.target.value)} error={isError}
          variant="filled" helperText={isError ? 'Name is required' : ''} />
        <TextField  id="margin-dense" margin="dense"  error={isError} 
          size="small" label="Email" helperText={isError ? 'Email is required' : ''}
          value={email} variant="filled" onChange={(e) => setEmail(e.target.value)}
         />
        <TextField type='number' id="margin-dense" margin="dense"  error={isError} size="small" label="Phone Number" 
          value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} variant="filled" 
          helperText={isError ? 'Phone Number is required' : ''}/>
        <TextField  id="margin-dense" margin="dense"  error={isError} helperText={isError ? 'Age is required' : ''}
          label="Age" onChange={(e) => setAge(e.target.value)} value={age} variant="filled" size="small"/>
         <Button  variant="contained" sx={{ ml: '40px', mt: '19px'}} 
          onClick={reset}>Create</Button>
        </Box>
        </form>
    </div>
  );
};

export default CreateUser;
