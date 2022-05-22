import React from 'react';
import './App.scss'; 
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../src/Components/ErrorPage/ErrorPage';
import Main from '../src/Components/Main/Main';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<ErrorPage/>}/>
  </Routes>
  )
}

export default App;
