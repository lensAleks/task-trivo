import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Bar from './components/Bar';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';

function App() {
  const isLogin = useSelector((state) => state.user.login) 
  return (
    <>
      <BrowserRouter>
      {isLogin ? <Login  /> : <Bar  />}
      {!isLogin && <Routes> 
        <Route path="/listUsers" element={<ListUser />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>}
     </BrowserRouter>
    </>
  );
};

export default App;
