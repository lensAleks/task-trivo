import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../store/slice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

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


function ListUser() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)
    const [showModal, setShowModal] = React.useState(false)
    const [currentId, setIdCurrent] = React.useState('')
    const [isError, setIsError] = React.useState(false)

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [age, setAge] = React.useState('');

    const updateData = () => {
      if(name && email && phoneNumber && age) {
        setIsError(false)
        const data = {
          id: currentId,
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          age: age
        } 
 
        dispatch(updateUser(data))
        setShowModal(false)
        setName('')
        setEmail('')
        setPhoneNumber('')
        setAge('')
        setIdCurrent('')
      } else {
        setIsError(true)
      }
   }

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, textAlign: 'start' }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email&nbsp;</TableCell>
            <TableCell align="left">Phone Number&nbsp;</TableCell>
            <TableCell align="left">Age&nbsp;</TableCell>
            <TableCell align="left">Delete&nbsp;</TableCell>
            <TableCell align="left">Update&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users !== undefined && users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phoneNumber}</TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell align="left"  color="inherit"
              >
                <DeleteOutlineIcon  size="small"  sx={{ "&:hover": { color: "blue", cursor:"pointer" } }}
                  onClick={() => dispatch(deleteUser(row.id))}/>
                
                </TableCell>
                 <TableCell>
                 <Button variant="text" size="small" onClick={() => {
                 setShowModal(!showModal);
                 setEmail(row.email);
                 setPhoneNumber(row.phoneNumber);
                 setAge(row.age);
                 setName(row.name);
                 setIdCurrent(row.id);
                 }}>Edit</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {showModal && 
     <ClickAwayListener onClickAway={() => setShowModal(false)}>
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
        onClick={updateData}>Update</Button>
      </Box>
      </form>
  </ClickAwayListener> }
    </>
  );
};

export default ListUser;