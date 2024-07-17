import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Outlet from './components/Outlet';
import ErrorPage from './components/ErrorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Outlet />} />
        <Route path='/404' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
