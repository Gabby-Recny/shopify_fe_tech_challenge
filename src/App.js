import React from 'react';
import './App.scss'; 
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import Main from './Main/Main';

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='*' element={<ErrorPage/>}/>
  </Routes>
  )
}

export default App;
